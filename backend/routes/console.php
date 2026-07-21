<?php

use App\Models\Inscription;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Purge RGPD (audit §4.1 - droit à l'effacement) : suppression définitive
// quotidienne des inscriptions désinscrites depuis plus de 30 jours.
Schedule::call(fn () => Inscription::purgeExpired())->daily();
