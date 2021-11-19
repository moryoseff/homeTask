import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'websiteID'
})
export class WebsiteIDPipe implements PipeTransform {

  transform(value: any, filterByWebsiteID: string, propName: string): any {

    if (value.length === 0 || filterByWebsiteID === '') {
      return value;
    }
    const resultArray = []
    for (const item of value) {

      if (item[propName] === filterByWebsiteID) {
        resultArray.push(item)
      }
    }
    return resultArray
  }

}
