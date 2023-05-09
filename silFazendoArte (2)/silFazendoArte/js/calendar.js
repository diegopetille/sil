
    
    document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            
            events: [
            {
              title: 'out',
              start: '2023-05-01', // Data de início do evento
              end: '2023-05-06',
              rendering: 'background', // Renderiza o evento como fundo, sem sobrepor outros eventos
              backgroundColor: 'red'
            },
            {
              title: 'out',
              start: '2023-05-08', // Outra data indisponível
              rendering: 'background',
              backgroundColor: 'red'
            },
            // Adicione mais eventos individuais para outros dias indisponíveis
          ]
        });
        calendar.render();
    });

 

