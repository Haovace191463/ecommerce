import { Injectable, CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler,): Observable<any> {
   return next.handle().pipe(map((data) => ({
     success: true,
     statusCode: context.switchToHttp().getResponse().statusCode,
     message: 'Request successful',
     data,
   })),
   );
  }
}