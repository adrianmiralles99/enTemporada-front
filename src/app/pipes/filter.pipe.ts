import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value: any, arg: any): any {
    if (arg == ""){
      return value;
    }
    else{
      const resultPosts = [];
      for(const post of value){
        if(post.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(arg.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) > -1){
           resultPosts.push(post);
        };
      };
      return resultPosts;
    }

  }


}
