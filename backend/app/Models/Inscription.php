<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'inscriptions';

    protected $fillable = [
        'evenement_id',
        'nom_participant',
        'email_participant',
        'token_desinscription',
    ];

    protected function casts(): array
    {
        return [
            'deleted_at' => 'datetime',
        ];
    }

    public function evenement()
    {
        return $this->belongsTo(Evenement::class)->withTrashed();
    }

    /**
     * Purge RGPD (droit à l'effacement — article 17) : supprime définitivement
     * les inscriptions désinscrites (soft-deleted) depuis plus de $days jours.
     *
     * La désinscription en libre-service (voir InscriptionController::desinscription)
     * effectue volontairement un soft delete, et non une suppression immédiate,
     * afin de conserver un délai de grâce permettant de gérer d'éventuels litiges
     * avant l'effacement réel des données personnelles (nom, email). Cette méthode
     * referme la boucle : au-delà du délai de grâce, les données sont réellement
     * et définitivement supprimées (principe de limitation de la conservation,
     * article 5.1.e du RGPD). Appelée quotidiennement via routes/console.php.
     *
     * @return int Nombre d'inscriptions supprimées définitivement
     */
    public static function purgeExpired(int $days = 30): int
    {
        $inscriptions = static::onlyTrashed()
            ->where('deleted_at', '<=', now()->subDays($days))
            ->get();

        $inscriptions->each(fn (self $inscription) => $inscription->forceDelete());

        return $inscriptions->count();
    }
}
