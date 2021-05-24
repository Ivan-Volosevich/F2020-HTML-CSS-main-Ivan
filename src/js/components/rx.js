import { fromEvent } from 'rxjs';
import { tap, map, throttleTime } from 'rxjs/operators';

document.addEventListener('DOMContentLoaded', () => {

    fromEvent(document, 'click').pipe(
        throttleTime(1000),
        map(e => { 
            return {x: e.clientX, y: e.clientY}
        })
    )
    .subscribe((data) => console.log(data));

})