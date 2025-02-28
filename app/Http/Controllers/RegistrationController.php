<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\Http\Resources\Registration as RegistrationResources;
use App\Models\Registration;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class RegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $registered_accounts = Registration::query(); // Use correct model

        if ($request->has('search')) {
            $registered_accounts->where('first_name', 'like', '%' . $request->search . '%')
                                ->orWhere('last_name', 'like', '%' . $request->search . '%')
                                ->orWhere('email', 'like', '%' . $request->search . '%');
        }

        return RegistrationResources::collection($registered_accounts->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(RegistrationRequest $request)
    {
        try {
            $registration = Registration::create([
                'first_name' => ucwords($request->first_name),
                'last_name' => ucwords($request->last_name),
                'email' => $request->email,
                'password' => Hash::make($request->password), // Hash password
                'mobile_number' => $request->mobile_number,
                'position' => $request->position,
                'government_agency' => $request->government_agency, // Fixed typo
                'region' => $request->region,
                'province' => $request->province,
                'city' => $request->city,
                'riverbasin_assigned' => $request->riverbasin_assigned,
                'lgu_fb' => $request->lgu_fb,
            ]);

            return response([
                'message' => 'Registration has been successfully saved',
                'data' => new RegistrationResources($registration),
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) { // Fixed spelling error
            return response()->json(['message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
