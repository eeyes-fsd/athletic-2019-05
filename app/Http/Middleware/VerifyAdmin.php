<?php

namespace App\Http\Middleware;

use Closure;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class VerifyAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->header('password') === env('ADMIN_PASSWORD')) {
            return $next($request);
        }
        throw new BadRequestHttpException('管理密码错误');
    }
}
