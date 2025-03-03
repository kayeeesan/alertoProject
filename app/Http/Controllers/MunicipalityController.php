<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\MunicipalityRequest;
use App\Http\Resources\Municipality as ResourcesMunicipality;
use App\Models\Municipality;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MunicipalityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $municipalities = [];
        if (isset($request->search)) {
            $municipalities = Municipality::where('name', 'like', '%' . $request->search . '%');
        }

        $municipalities = isset($request->search) && $request->search ? $municipalities->paginate(10) : Municipality::paginate(10);
        return ResourcesMunicipality::collection(Municipality::paginate(10));
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function store(MunicipalityRequest $request)
     {
 
         try {
             $municipality = new Municipality();
             $municipality->name = ucwords($request->name);
             $municipality->slug = Str::slug($request->name, '-');
             $municipality->save();
             return response(['message' => 'Municipality has been sucessfully saved', 'data' => $municipality], Response::HTTP_CREATED);
         } catch (\Exception $e) {
             return response()->json(['message' => $e->getMessage()]);
         }
     }
}
