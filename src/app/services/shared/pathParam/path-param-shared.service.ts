import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PathParamSharedService {
  onRequestIdParam = new EventEmitter<number>();
}
