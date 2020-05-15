import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/sevice/http.service';
import { HttpParams } from "@angular/common/http";


@Component({
  selector: 'app-quantity-conversion',
  templateUrl: './quantity-conversion.component.html',
  styleUrls: ['./quantity-conversion.component.scss']
})
export class QuantityConversionComponent implements OnInit {
  public value: number;
  public quantityTypes = ["Length", "Volume", "Temperature"]
  constructor(private httpservice: HttpService) { }


  ngOnInit(): void {
    this.quantity(),
      this.unit(this.unit)

  }

  public quantity() {
    {
      this.httpservice.getQuantity().subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          this.quantityTypes.push(data[i])
        }
      });
      console.log(this.quantityTypes)
    }
  }
  public unit(unit: any) {
    this.httpservice.getUnit(unit);
    console.log(this.unit)

  }


}
