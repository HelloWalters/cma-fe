import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AdminService } from '../../../../services/admin.service';
import { GameRace } from '../../../../models/game-models/gamerace.model';

@Component({
  providers: [AdminService],
  selector: 'app-race-list',
  templateUrl: './race-list.component.html'
})
export class GameRaceList implements OnInit {
  listTitle: string = 'Game Races';

  isloading$ = this.adminService.isloading$;
  gameRaces$: Observable<GameRace[]> = this.adminService.gameRaces$;

  @Output() closeModal = new EventEmitter();
  @Output() editgameRace = new EventEmitter();

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
  }

  closeModalEvent(){
    this.closeModal.emit();
  }

  editGameRaceFn(gameRace: GameRace): void {
    this.editgameRace.emit(gameRace);
  }

}
