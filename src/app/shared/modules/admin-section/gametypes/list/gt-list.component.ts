import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AdminService } from '../../../../services/admin.service';
import { GameType } from '../../../../models/game-models/gametype.model';

@Component({
  providers: [AdminService],
  selector: 'app-gt-list',
  templateUrl: './gt-list.component.html'
})
export class GameTypeList implements OnInit {
  listTitle: string = 'GameTypes';

  isloading$ = this.adminService.isloading$;
  gameTypes$: Observable<GameType[]> = this.adminService.gameTypes$;

  @Output() closeModal = new EventEmitter();
  @Output() editGameType = new EventEmitter();

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
  }

  closeModalEvent(){
    this.closeModal.emit();
  }

  editGameTypeFn(gameType: GameType): void {
    this.editGameType.emit(gameType);
  }

}
