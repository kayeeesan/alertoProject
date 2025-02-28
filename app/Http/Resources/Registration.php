<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Registration extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return[
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'password' => $this->password,
            'position' => $this->position,
            'government_agency' => $this->government_agency,
            'region' => $this->region,
            'province' => $this->province,
            'city' => $this->city,
            'riverbasin_assigned' => $this->riverbasin_assigned,
            'lgu_fb' => $this->lgu_fb,
        ];
    }
}
