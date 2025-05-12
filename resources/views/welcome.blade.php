<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Securely buy and sell cryptocurrencies with ease on our trusted platform. Get real-time prices, fast transactions, and 24/7 support. Start trading Bitcoin, Ethereum, and more today!" />
    <link rel="shortcut icon" href="assets/images/merchant/connect.png" type="image/x-icon" />
    <link rel="preconnect" href="../../../../fonts.googleapis.com/index.html" />
    <link rel="preconnect" href="../../../../fonts.gstatic.com/index.html" crossorigin />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Merchant Upgrade</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <!-- @vite(['resources/sass/app.scss', 'resources/js/app.js']) -->
    <script defer src="/assets/js/app.js"></script>
    <!-- <link href="/assets/css/index.css" rel="stylesheet"> -->
    </head>
    <body class="" >
        <div id="app">
          @yield('content')
        </div>
    </body>
</html>
