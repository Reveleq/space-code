import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Destinations } from '../../shared/models';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
})
export class DestinationComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  type: string = '';
  _type: string | null = '';
  planet: Destinations = {
    name: '',
    description: '',
    distance: '',
    travel: '',
    images: {
      png: '',
      webp: '',
    },
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._type = params.get('id');
      if (typeof this._type === 'string') {
        this.type = this._type;
        if (this.type.length === 24) {
          this.apiService.getDestinations(this.type).subscribe({
            next: (value) => {
              if (value.length === 0) {
                window.alert('error, try again!');
                return;
              } else {
                this.planet = value[0];
              }
            },
            error: (err) => {
              window.alert('error, try again!');
              return;
            },
          });
        } else {
          window.alert('error, bad URL address');
        }
      } else if (this._type === null || undefined) {
        window.alert('something is wrong, try again!');
        return;
      }
    });
  }
}
