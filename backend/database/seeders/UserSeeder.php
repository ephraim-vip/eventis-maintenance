<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $email = env('ADMIN_EMAIL', 'admin@eventis.ci');
        $password = env('ADMIN_PASSWORD', 'admin@12');

        if (app()->environment('production') && $password === 'admin@12') {
            throw new \RuntimeException(
                'ADMIN_PASSWORD doit être défini via une variable d\'environnement '
                . 'forte en production (secrets Railway) — voir audit sécurité §4.2. '
                . 'Déploiement interrompu pour éviter un identifiant faible en prod.'
            );
        }

        User::create([
            'email'    => $email,
            'password' => Hash::make($password),
        ]);
    }
}
