<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistrationController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::post('/registration', [RegistrationController::class, 'store']);

Route::get('/{any}', function () {
    return view('welcome'); // Renders Vue app
})->where('any', '.*');

