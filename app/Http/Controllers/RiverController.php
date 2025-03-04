<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RiverRequest;
use App\Http\Resources\River as ResourcesRiver;
use App\Models\River;
use Illuminate\Http\Response;

use Illuminate\Support\Str;

class RiverController extends Controller
{
    public function store(RiverRequest $request)
    {
        try {
            $river = new River();
            $river->name = ucwords($request->name);
            $river->river_location = $request->river_location;
            $river->save();
            return response(['message' => 'River has been sucessfully saved', 'data' => $river], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()]);
        }
    }
    public function index(Request $request)
    {
        $query = River::query();
        
        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }
    
        return ResourcesRiver::collection($query->paginate(10));
    }
    
    public function destroy($id)
    {
        try {
            $river = River::findOrFail($id);
            $river->delete();
            return response(['message' => 'River has been successfully deleted'], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update()
    {
     
    }
}
