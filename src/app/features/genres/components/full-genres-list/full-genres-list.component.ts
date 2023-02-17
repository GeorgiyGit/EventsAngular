import { IGenre } from 'src/app/features/genres/models/genre';
import { GenresService } from './../../services/genres.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-genres-list',
  templateUrl: './full-genres-list.component.html',
  styleUrls: ['./full-genres-list.component.scss']
})
export class FullGenresListComponent implements OnInit {
  
  genres:IGenre[];
  constructor(private genresService:GenresService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.genresService.getAll().subscribe(res=>{
      this.genres=res;
    },error=>{
      console.warn(error);
    });
  }


  addGenre():void{
    this.router.navigateByUrl("/genres/add");
  }

  editGenre(id:number):void{
    this.router.navigateByUrl("/genres/add/"+id);
  }
  deleteGenre(id:number):void{
    this.genresService.removeGenre(id).subscribe(res=>{
      this.genres.splice(this.genres.findIndex(g=>g.id==id), 1);
    },error=>{
      console.log(error);
    })
  }
}
