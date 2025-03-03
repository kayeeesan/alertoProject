<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class MunicipalityRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
   
     public function authorize(): bool
     {
         return true; // Allow all users to submit this form
     }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        if ($this->method() == "POST") {
            return [
                'name' => 'required|string|max:255'
            ];
        } else {
            return [
                'name' => 'required|string|max:255',
                'id' => 'required|exists:municipalities,id|max:255'
            ];
        }
    }

    public function messages()
    {
        return [
            'name.required' => 'Municipality Type name is required.',
            'id.required'  => 'Municipality Type does not exist'
        ];
    }
}
