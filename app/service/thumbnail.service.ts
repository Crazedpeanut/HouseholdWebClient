import {Injectable} from "@angular/core";
/**
 * Created by john on 8/01/2017.
 */

@Injectable()
export class ThumbnailService {
    createThumbnail(file: File) {
        let fileReader = new FileReader();

        return new Promise((resolve, reject) => {
            fileReader.onload = function(e:any){
                resolve(e.target.result);
            };

            fileReader.readAsDataURL(file);
        });
    }
}
