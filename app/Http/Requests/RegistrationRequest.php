<?php



namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Allow all users to submit this form
    }

    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:registrations',
            'password' => 'required|string|min:6', // Removed 'confirmed' rule
            'mobile_number' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'government_agency' => 'required|string|max:255',
            'region' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'riverbasin_assigned' => 'required|string|max:255',
            'lgu_fb' => 'nullable|string|max:255'
        ];
    }
}

