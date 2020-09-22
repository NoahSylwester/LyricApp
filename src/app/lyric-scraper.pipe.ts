import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lyricScraper'
})
export class LyricScraperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
