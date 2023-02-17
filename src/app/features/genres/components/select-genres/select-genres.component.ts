import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IGenre } from '../../models/genre';
import { GenresService } from '../../services/genres.service';

@Component({
  selector: 'app-select-genres',
  templateUrl: './select-genres.component.html',
  styleUrls: ['./select-genres.component.scss']
})
export class SelectGenresComponent {

  @Input() color: string;
  filter: string;
  genres: IGenre[];

  @Input() selectedGenres: IGenre[] = [];

  @Output() selectedGenreEvent = new EventEmitter<IGenre[]>();
  @Input() placeholder: string;

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getAll().subscribe(result => {
      this.genres = result;
    });
    if (this.selectedGenres == null) this.selectedGenres = [];
  }

  select(e: any): void {
    let find = this.genres.find(x => x?.name === e.target.value);
    let genre = this.genres.find(x => x.id === find?.id);
    if (genre != null) {
      if (!this.selectedGenres.includes(genre)) {
        this.selectedGenres.push(genre);
        
        this.selectedGenreEvent.emit(this.selectedGenres);
        e.target.value = '';
      }
    }

  }
  unSelect(genre: IGenre) {
    this.selectedGenres = this.selectedGenres.filter(obj => obj !== genre);
    this.selectedGenreEvent.emit(this.selectedGenres);
  }
}
