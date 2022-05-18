import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reporte } from 'src/app/modelos/reporte.model';
import { ReportesService } from 'src/app/servicios/reportes.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
})
export class ReporteComponent implements OnInit {
  idcomment!: number;
  idusuarioreportado!: number;
  nicknameusuarioreportado!: string;
  textocomment!: string;
  tipo!: string;
  motivo: string = '';
  error = new Map();
  constructor(
    private token: TokenStorageService,
    private reporteService: ReportesService,
    private dialogRef: MatDialogRef<ReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reporte
  ) {}

  ngOnInit(): void {
    this.idcomment = this.data['idcomment'];
    this.idusuarioreportado = this.data['idusuarioreportado'];
    this.nicknameusuarioreportado = '@' + this.data['nicknameuser'];
    this.textocomment = this.data['textocomment'];
    this.tipo = this.data['tipo'];

  }
  ngOnChanges(): void {
  }
  onSubmit(): void {
    this.comprobarErrores();
    if (this.token.getId()){
        if (this.error.size == 0) {
          this.reporteService.crearReporte(this.idcomment!, this.idusuarioreportado!, this.motivo!, this.tipo!).subscribe({
            next: (data) => {
              if (!data.error) {
                  this.dialogRef.close();
              }
            },
         });
        }
    }


    //sustituir el reload por un close del popup
    //window.location.reload();
  }
  comprobarErrores(){
    this.error = new Map();
    if (!this.motivo || this.motivo == "") {
      this.error.set("motivo", "Para hacer un reporte debe rellenar claramente el motivo de este.");
    }else if ( this.motivo.length > 280 ){
      this.error.set("motivo", "La longitud máxima del motivo es de 280 caracteres.");

    }

  }
}
