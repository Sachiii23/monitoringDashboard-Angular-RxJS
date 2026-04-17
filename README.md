# 📊MonitoringDashboard

A real-time monitoring dashboard built with Angular to help engineers detect, analyze, and respond to service issues quickly. Designed with high-glanceability, resilience, and real-time updates in mind. This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## 🚀Features

- Live Service Monitoring (auto update every 15 seconds),
 
- Realtime Log Streaming (updates every 3 seconds),

- Status Indicators :

    🟢 UP
  
    🟡 WARNING

    🔴 DOWN
  
- Error Handling & Resilience,
  
- Responsive UI,

- High-Glanceability Dashboard.

## ⚙️Setup Guide

Follow these steps to run the project locally:

1. Clone the Repository

```bash
git clone https://github.com/Sachiii23/monitoringDashboard-Angular-RxJS.git
cd monitoring-dashboard
```

2. Install Dependencies

```bash
npm install
```

3. Run the Project

``` bash
ng serve
```

4. Open in Browser

```bash
http://localhost:4200
```

## ⚠️Troubleshooting

Angular CLI not found

``` bash
npm install -g @angular/cli
```

Dependency / Cache Issues

``` bash
rm -rf node_modules
npm install
```


## 🧠The "Why" (Architecture & Design Decisions)

1. Reactive Architecture (RxJS)

This project uses RxJS to handle real-time data streams.

``` bash
interval(15000).pipe(startWith(0))
```

Why?

- Enables automatic UI updates without refresh,

- Handles async data efficiently,

- Ideal for monitoring systems.

2. Separation of Concerns

The project is structured into:

```Service Layer``` → ```handles data & logic```, and ```Component Layer``` → ```handles UI```.

The result :

Clean code, Easier maintenance, and Better scalability

3. State Management (BehaviorSubject)

``` bash
private servicesSubject = new BehaviorSubject<any[]>([]);
services$ = this.servicesSubject.asObservable();
```

Why?

- Keeps data reactive,

- UI updates automatically,

- Prevents direct mutation.

4. Error Resilience

``` bash
catchError(() => of(fallbackData))
```

Why?

- Prevents app crashes,

- Provides fallback UI,

- Keeps system running.

5. High-Glanceability UI

Designed for quick monitoring:

- Clear color indicators,

- Card-based layout

- Minimal text, maximum visibility

6. Simulated Real-Time System

Since this is a frontend-only project:

- Data is generated using mock functions,

- Logs are streamed using intervals

## 📸Evidence

1. Dashboard View

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/2159e60f-dbef-43a0-ba08-7de19b8f94d3" />

- Displays all services,

- Status updates automatically,

- Color indicators active.

2. Log Detail View

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/79633751-f180-420b-9789-a45bb2112fae" />

- Real-time log updates

- Message-based color highlighting:

  🟢 UP

  🟡 WARNING

  🔴 DOWN

3. Error State

 - “Service unavailable”

  <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/80db4a58-6dce-409e-9f7b-8ba000589b94" />

 - “Failed to load data”

  <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/9b6516be-3f9e-4dd6-a924-82b350ae34b7" />

## 🧪Tech Stack

- Angular 14+

- RxJS

- TypeScript

- CSS
