import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements OnInit, OnDestroy {
  isChecked: boolean = false;
  isCheckedAd: boolean = false;
  checkField: any;

  private _unsubscriptionList = new Subscription();

  constructor(
    private _sharedService: SharedService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeFieldArray();
  }

  ngOnDestroy(): void {
    this._unsubscriptionList.unsubscribe();
  }

  subscribeFieldArray() {
    this._unsubscriptionList.add(
      this._sharedService
        .getFieldArraySubjectObservable()
        .subscribe((res: any) => {
          console.log(res);
          this.checkField = res;
          this.isChecked = !this.checkField.emptyFieldPd;
          this.isCheckedAd = !this.checkField.emptyFieldAd;
          console.log(this.isChecked, this.isCheckedAd);
          this.cd.detectChanges();
        })
    );
  }
}
