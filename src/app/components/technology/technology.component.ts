import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Technology } from '../../shared/models';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  type: string = '';
  _type: string | null = '';
  technology: Technology = {
    name: '',
    images: {
      landscape: '',
      portrait: '',
    },
    description: '',
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._type = params.get('id');
      if (typeof this._type === 'string') {
        this.type = this._type;
        if (this.type.length === 24) {
          this.apiService.getTechnology(this.type).subscribe({
            next: (value) => {
              if (value.length === 0) {
                window.alert('error, try again!');
                return;
              } else {
                this.technology = value[0];
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
