<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\RiverController;
use App\Http\Controllers\MunicipalityController;
// Route::get('/', function () {
//     return view('welcome');
// });

Route::post('/registration', [RegistrationController::class, 'store']);
Route::get('/recipients-data', [RegistrationController::class, 'index']);
Route::resource('/rivers', RiverController::class);
Route::resource('/municipalities', MunicipalityController::class);

Route::get('/{any}', function () {
    return view('welcome'); // Renders Vue app
})->where('any', '.*');

