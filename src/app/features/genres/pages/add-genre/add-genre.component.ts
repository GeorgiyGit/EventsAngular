import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateGenre } from '../../models/create-genre';
import { IGenre } from '../../models/genre';
import { GenresService } from '../../services/genres.service';

@Component({
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.scss']
})
export class AddGenreComponent implements OnInit {
  genreForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
  });

  get formValue() {
    return this.genreForm.value as ICreateGenre;
  }

  get name() { return this.genreForm.get('name')!; }

  public parents: IGenre[];
  public placeholder = "Parents";
  constructor(private fb: FormBuilder, private genresService: GenresService, private router: Router) { }

  ngOnInit(): void {
  }


  sumbit(): void {

    if (this.genreForm.invalid) {
      alert("Invalid data!");
      console.log(this.genreForm.value.name);
      return;
    }

    const genre: ICreateGenre = this.genreForm.value;
    genre.parents = [];

    if (this.parents != null) {
      this.parents.forEach(element => {
        genre.parents.push(element.id);
      });
    }

    this.genresService.addGenre(genre).subscribe(result => {
      console.log(result);

      this.router.navigateByUrl('/');
    }, error => {
      console.error(error);
    });
  }

  addParent(genres: IGenre[]) {
    this.parents = genres;
    console.log('Genres is updated');
  }

}