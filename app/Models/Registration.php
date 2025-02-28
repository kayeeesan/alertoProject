<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // ✅ Add this import

class registration extends Model
{
    use SoftDeletes; // Enable SoftDeletes

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'mobile_number',
        'position',
        'government_agency',
        'region',
        'province',
        'city',
        'riverbasin_assigned',
        'lgu_fb'
    ];

    protected $hidden = ['password']; // Hide password in API responses

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
