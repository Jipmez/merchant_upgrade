<?php

use Illuminate\Support\Facades\Route;
use App\Mail\Contact;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });



Route::get('/', function () {
    return view('landing/home');
});


Route::post('/sendmessage', function (Request $request) {

    Mail::to('r4111905@gmail.com')->send(new Contact($request));
    return response()->json(['message'=>'Successfull']);
});

// r4111905@gmail.com
