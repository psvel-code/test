import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent {


  carouselItems: any[] = [
    {
      imageUrl: '../../../../assets/1.jpg',
      title: 'Item 1',
      description: 'Description of Item 1',
      buttonLabel: 'Button 1'
    },
    {
      imageUrl: '../../../../assets/5.jpg',
      title: 'Item 2',
      description: 'Description of Item 2',
      buttonLabel: 'Button 2'
    },  {
      imageUrl: '../../../../assets/6.jpg',
      title: 'Item 2',
      description: 'Description of Item 2',
      buttonLabel: 'Button 3'
    },  {
      imageUrl: '../../../../assets/5.jpg',
      title: 'Item 2',
      description: 'Description of Item 2',
      buttonLabel: 'Button 4'
    },
    // Add more items as needed
  ];

  currentIndex = 0;

  ngOnInit(): void {
    // Handle keyboard arrow key navigation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        this.prevItem();
      } else if (event.key === 'ArrowRight') {
        this.nextItem();
      }
    });
  }

  prevItem(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.carouselItems.length - 1 : this.currentIndex - 1;
  }

  nextItem(): void {
    this.currentIndex = (this.currentIndex === this.carouselItems.length - 1) ? 0 : this.currentIndex + 1;
  }

  goToItem(index: number): void {
    this.currentIndex = index;
  }

  onButtonClick(item: any): void {
    // Handle button click for the specific item
    console.log('Button Clicked for Item:', item.title);
  }

}





