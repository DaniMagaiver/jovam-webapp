import { ModalsService } from './../shared/services/modals.service';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageInterceptor implements HttpInterceptor {
  constructor(private modalsService: ModalsService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return new Observable((observer) => {
      next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            observer.next(event);
          }
        },
        (responseError: HttpErrorResponse) => {
          const {error} = responseError;
          const titles = [
            { status: "NOT_FOUND", title: 'Não encontrado' },
            { status: 500, title: 'Erro no servidor' },
            { status: 'BAD_REQUEST', title: 'Dados inválidos' },
            { status: 'FORBIDDEN', title: 'Acesso negado' },
          ];
          console.error(responseError);
          const title =
            titles.find((title) => title.status === error.status)?.title ||
            'Erro desconhecido';
          this.modalsService.showMessage(title, error.message);
          observer.complete();
        },
        () => {
          observer.complete();
        }
      );
    });
  }
}
