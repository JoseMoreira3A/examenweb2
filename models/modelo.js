const mongoose = require("mongoose");
const { Schema } = mongoose;

const ModeloSchema = new Schema(
  {
    fecha: { type: String },
    hora: { type: String },
    detalle: { type: String },
    ingreso: { type: String },
    gasto: { type: String },
    saldo: { type: String },
    tipo_error: { type: String }

  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Modelo", ModeloSchema);
