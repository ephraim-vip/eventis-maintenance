<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class Controller
{
    /**
     * Valide et retourne une valeur sûre pour le paramètre de pagination "per_page".
     * Corrige le finding sécurité §4.1 : absence de validation → crash 500 +
     * fuite de stack trace (APP_DEBUG=true).
     */
    protected function validatedPerPage(Request $request, int $default = 10, int $max = 100): int
    {
        $validated = $request->validate([
            'per_page' => "sometimes|integer|min:1|max:{$max}",
        ]);

        return $validated['per_page'] ?? $default;
    }
}
