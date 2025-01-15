import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../service/image.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  searchQuery:string=''
  images:any=[]=[];
  constructor(private imageSearchService:ImageService){}
  searchImages() {

    this.imageSearchService.searchImages(this.searchQuery).subscribe(
      (data:any) => {
        this.images = data.results;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }

  ngOnInit(): void {
    console.log(this.images, "sdf")
  }
}
