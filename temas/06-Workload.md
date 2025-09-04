# 📊 Plantilla de Carga de Trabajo — Caso de Sensores Meteorológicos

## 🧩 Casos de Uso

- Una organización ha desplegado **100 millones de sensores meteorológicos**.
- El objetivo es **recolectar los datos transmitidos por todos los dispositivos en una base de datos central** para realizar predicciones y análisis de tendencias.

## 📌 Datos Principales

- **Cantidad de dispositivos:** `100,000,000`
- **Analistas:** `10`
- **Periodo de análisis:** `10 años`

## 📐 Supuestos

- Los datos **por hora** son suficientes para análisis de tendencias.
- Se requiere conservar los datos **por minuto** para análisis más profundos.

---

## ⚙️ Operaciones

### 🔹 Actor: Dispositivo Sensor

- **Descripción:** Envía datos meteorológicos al servidor.
- **Tipo de operación:** `write`
- **Datos involucrados:** `device ID`, `timestamp`, `métricas del dispositivo`
- **Frecuencia:** Cada minuto
- **Tasa:** `100,000,000 / minuto`

### 🔹 Actor: Científico de Datos

- **Descripción:** Ejecuta consultas analíticas sobre métricas de temperatura.
- **Tipo de operación:** `read`
- **Datos involucrados:** `métricas de temperatura`
- **Frecuencia:** ~10 consultas analíticas por hora
- **Tasa:** `10 científicos * 10 consultas = 100 / hora`

---

## 🧱 Entidades

- `Usuarios`
  - `Perfiles`
- `Dispositivos`
  - `Categorías de dispositivos`
- `Datos de dispositivos`
  - `Temperatura del aire`
  - `Presión`
  - `Viento` (dirección, velocidad)

---

## 🔍 Observaciones

- Hay **más operaciones de escritura** que de lectura.

