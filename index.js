// --- TRADUCCIONES --- //
const translations = {
    // General
    appTitle: { es: 'Planificador de Turnos', pt: 'Planejador de Turnos' },
    manageStaff: { es: 'Gestionar Personal', pt: 'Gerenciar Equipe' },
    parameters: { es: 'Parámetros', pt: 'Parâmetros' },
    week: { es: 'Semana', pt: 'Semana'},
    goToToday: { es: 'Ir a la Semana Actual', pt: 'Ir para a Semana Atual' },
    rules: { es: 'Reglas', pt: 'Regras' },
    actions: { es: 'Acciones', pt: 'Ações' },
    preassignShifts: { es: 'Preasignar Turnos', pt: 'Pré-atribuir Turnos' },
    preassignShiftsMonthly: { es: 'Preasignar Turnos (Mes)', pt: 'Pré-atribuir Turnos (Mês)' },
    clearSchedule: { es: 'Limpiar Horario', pt: 'Limpar Horário' },
    kitchen: { es: 'Cocina', pt: 'Cozinha' },
    diningRoom: { es: 'Salón', pt: 'Salão' },
    kpis: { es: 'Indicadores Clave de Rendimiento (KPIs)', pt: 'Indicadores Chave de Performance (KPIs)' },
    weeklyEmployeeLoad: { es: 'Carga Semanal por Empleado', pt: 'Carga Semanal por Funcionário' },
    visualWeeklySchedule: { es: 'Horario Semanal Visual', pt: 'Horário Semanal Visual' },
    name: { es: 'Nombre', pt: 'Nome' },
    role: { es: 'Rol', pt: 'Função' },
    contractHours: { es: 'Horas de Contrato', pt: 'Horas de Contrato' },
    assignedHours: { es: 'Horas Asignadas', pt: 'Horas Atribuídas' },
    balance: { es: 'Balance', pt: 'Saldo' },
    cancel: { es: 'Cancelar', pt: 'Cancelar' },
    save: { es: 'Guardar', pt: 'Salvar' },
    saveChanges: { es: 'Guardar Cambios', pt: 'Salvar Alterações' },
    saved: { es: 'Guardado!', pt: 'Salvo!' },
    confirm: { es: 'Confirmar', pt: 'Confirmar' },
    confirmClearSchedule: { es: '¿Estás seguro de que quieres limpiar todo el horario para este local?', pt: 'Tem certeza de que deseja limpar todo o horário para este local?' },
    employee: { es: 'Empleado', pt: 'Funcionário' },
    exportPDF: { es: 'Exportar PDF', pt: 'Exportar PDF' },
    registerAbsence: { es: 'Registrar Ausencia', pt: 'Registrar Ausência' },
    completeAllFields: { es: 'Por favor, completa todos los campos.', pt: 'Por favor, preencha todos os campos.' },
    pleaseWriteANote: { es: 'Por favor, escribe una nota.', pt: 'Por favor, escreva uma nota.' },
    confirmDeleteEmployee: { es: '¿Seguro que quieres eliminar a este empleado? Esta acción no se puede deshacer.', pt: 'Tem certeza de que deseja excluir este funcionário? Esta ação não pode ser desfeita.' },
    employeeCannotBeAssigned: { es: '{employeeName} ({employeeArea}) no puede ser asignado a {targetArea}.', pt: '{employeeName} ({employeeArea}) não pode ser atribuído a {targetArea}.' },
    adminModeActivated: { es: 'Modo Administrador Activado', pt: 'Modo Administrador Ativado' },
    adminModeDeactivated: { es: 'Modo Administrador Desactivado', pt: 'Modo Administrador Desativado' },
    // Días y Meses
    lunes: { es: 'Lunes', pt: 'Segunda' },
    martes: { es: 'Martes', pt: 'Terça' },
    miércoles: { es: 'Miércoles', pt: 'Quarta' },
    jueves: { es: 'Jueves', pt: 'Quinta' },
    viernes: { es: 'Viernes', pt: 'Sexta' },
    sábado: { es: 'Sábado', pt: 'Sábado' },
    domingo: { es: 'Domingo', pt: 'Domingo' },
    enero: { es: 'Ene', pt: 'Jan' },
    febrero: { es: 'Feb', pt: 'Fev' },
    marzo: { es: 'Mar', pt: 'Mar' },
    abril: { es: 'Abr', pt: 'Abr' },
    mayo: { es: 'May', pt: 'Mai' },
    junio: { es: 'Jun', pt: 'Jun' },
    julio: { es: 'Jul', pt: 'Jul' },
    agosto: { es: 'Ago', pt: 'Ago' },
    septiembre: { es: 'Sep', pt: 'Set' },
    octubre: { es: 'Oct', pt: 'Out' },
    noviembre: { es: 'Nov', pt: 'Nov' },
    diciembre: { es: 'Dic', pt: 'Dez' },
     // Nombres completos de meses (para PDF)
    full_enero: { es: 'Enero', pt: 'Janeiro' },
    full_febrero: { es: 'Febrero', pt: 'Fevereiro' },
    full_marzo: { es: 'Marzo', pt: 'Março' },
    full_abril: { es: 'Abril', pt: 'Abril' },
    full_mayo: { es: 'Mayo', pt: 'Maio' },
    full_junio: { es: 'Junio', pt: 'Junho' },
    full_julio: { es: 'Julio', pt: 'Julho' },
    full_agosto: { es: 'Agosto', pt: 'Agosto' },
    full_septiembre: { es: 'Septiembre', pt: 'Setembro' },
    full_octubre: { es: 'Octubre', pt: 'Outubro' },
    full_noviembre: { es: 'Noviembre', pt: 'Novembro' },
    full_diciembre: { es: 'Diciembre', pt: 'Dezembro' },
    // KPIs
    coverage: { es: 'Cobertura', pt: 'Cobertura' },
    deficit: { es: 'Déficit (horas-persona)', pt: 'Déficit (horas-pessoa)' },
    excess: { es: 'Exceso (horas-persona)', pt: 'Excesso (horas-pessoa)' },
    absenteeismHours: { es: 'Horas de Ausentismo', pt: 'Horas de Absenteísmo' },
    // Staff Modal
    addToKitchen: { es: 'Añadir a Cocina', pt: 'Adicionar à Cozinha' },
    addToDiningRoom: { es: 'Añadir a Salón', pt: 'Adicionar ao Salão' },
    editEmployee: { es: 'Editar Empleado', pt: 'Editar Funcionário' },
    addEmployeeTo: { es: 'Añadir a {area}', pt: 'Adicionar a {area}' },
    // Assignment Modal
    assignShiftsFor: { es: 'Asignar Turnos: {employeeName}', pt: 'Atribuir Turnos: {employeeName}' },
    assignedHoursOf: { es: 'Horas Asignadas: {assigned} / {contract}', pt: 'Horas Atribuídas: {assigned} / {contract}' },
    // Absence Modal
    registerAbsenceFor: { es: 'Registrar Ausencia: {employeeName}', pt: 'Registrar Ausência: {employeeName}' },
    day: { es: 'Día', pt: 'Dia' },
    reason: { es: 'Motivo', pt: 'Motivo' },
    notesOptional: { es: 'Notas (Opcional)', pt: 'Notas (Opcional)' },
    addAbsence: { es: 'Añadir Ausencia', pt: 'Adicionar Ausência' },
    registeredAbsences: { es: 'Ausencias Registradas', pt: 'Ausências Registradas' },
    noAbsencesRegistered: { es: 'No hay ausencias registradas.', pt: 'Nenhuma ausência registrada.' },
    sick: { es: 'Enfermedad', pt: 'Doença' },
    vacation: { es: 'Vacaciones', pt: 'Férias' },
    personalMatter: { es: 'Asunto Personal', pt: 'Assunto Pessoal' },
    other: { es: 'Otro', pt: 'Outro' },
    // Note Modal
    addNoteToLogbook: { es: 'Añadir Nota a Bitácora', pt: 'Adicionar Nota ao Log' },
    addNoteModalTitle: { es: 'Añadir Nota a Bitácora', pt: 'Adicionar Nota ao Log' },
    note: { es: 'Nota', pt: 'Nota' },
    notePlaceholder: { es: 'Escribe tu nota aquí...', pt: 'Escreva sua nota aqui...' },
    // Rules text
    rulesText: { es: 'Descanso Mínimo: 11hs<br>Máx. Diario: 8hs<br>Descanso Semanal: 2 días (40hs)', pt: 'Descanso Mínimo: 11hs<br>Máx. Diário: 8hs<br>Descanso Semanal: 2 dias (40hs)' },
    // PDF Export
    weekOf: { es: 'Semana del', pt: 'Semana de' },
    to: { es: 'al', pt: 'a' },
    weeklyScheduleFor: { es: 'Horario Semanal para', pt: 'Horário Semanal para' },
    restaurant: { es: 'Restaurante', pt: 'Restaurante' },
    dayPDF: { es: 'Día', pt: 'Dia' },
    startTime: { es: 'Hora de Inicio', pt: 'Hora de Início' },
    endTime: { es: 'Hora de Fin', pt: 'Hora de Fim' },
    durationHs: { es: 'Duración (hs)', pt: 'Duração (hs)' },
    hoursSummary: { es: 'Resumen de Horas:', pt: 'Resumo de Horas:' },
    totalAssignedHours: { es: 'Total de Horas Asignadas:', pt: 'Total de Horas Atribuídas:' },
    contractHoursPDF: { es: 'Horas de Contrato:', pt: 'Horas de Contrato:' },
    balancePDF: { es: 'Balance:', pt: 'Saldo:' },
     // Logbook
    changeLogbook: { es: 'Bitácora de Cambios', pt: 'Log de Alterações' },
    actionType: { es: 'Tipo de Acción', pt: 'Tipo de Ação' },
    startDate: { es: 'Fecha Inicio', pt: 'Data de Início' },
    endDate: { es: 'Fecha Fin', pt: 'Data de Fim' },
    clearFilters: { es: 'Limpiar Filtros', pt: 'Limpar Filtros' },
    allEmployees: { es: 'Todos los empleados', pt: 'Todos os funcionários' },
    allTypes: { es: 'Todos los tipos', pt: 'Todos os tipos' },
    noLogsFound: { es: 'No se encontraron registros con los filtros aplicados.', pt: 'Nenhum registro encontrado com os filtros aplicados.' },
    log_shift_add: { es: '{employeeName} asignado a {area} el {day} a las {hour}.', pt: '{employeeName} atribuído a {area} em {day} às {hour}.' },
    log_shift_remove: { es: '{employeeName} removido de {area} el {day} a las {hour}.', pt: '{employeeName} removido de {area} em {day} às {hour}.' },
    log_shift_move: { es: '{employeeName} movido de {sourceArea} ({sourceDay} {sourceHour}) a {targetArea} ({targetDay} {targetHour}).', pt: '{employeeName} movido de {sourceArea} ({sourceDay} {sourceHour}) para {targetArea} ({targetDay} {targetHour}).' },
    log_schedule_clear: { es: 'Horario limpiado para el restaurante {restaurantName}.', pt: 'Horário limpo para o restaurante {restaurantName}.' },
    log_schedule_preassign: { es: 'Preasignación de turnos ejecutada para {restaurantName}.', pt: 'Pré-atribuição de turnos executada para {restaurantName}.' },
    log_absence_add: { es: 'Ausencia registrada para {employeeName} el {day} (Motivo: {reason}).', pt: 'Ausência registrada para {employeeName} em {day} (Motivo: {reason}).' },
    log_absence_remove: { es: 'Ausencia eliminada para {employeeName} el {day}.', pt: 'Ausência removida para {employeeName} em {day}.' },
    log_staff_add: { es: 'Empleado añadido: {employeeName} a {area}.', pt: 'Funcionário adicionado: {employeeName} à {area}.' },
    log_staff_edit: { es: 'Datos de {employeeName} actualizados.', pt: 'Dados de {employeeName} atualizados.' },
    log_staff_remove: { es: 'Empleado eliminado: {employeeName}.', pt: 'Funcionário removido: {employeeName}.' },
    log_note_add: { es: 'Nota añadida: "{noteText}"', pt: 'Nota adicionada: "{noteText}"' },
    log_type_shift: { es: 'Cambios de Turno', pt: 'Alterações de Turno' },
    log_type_absence: { es: 'Ausencias', pt: 'Ausências' },
    log_type_staff: { es: 'Gestión de Personal', pt: 'Gerenciamento de Equipe' },
    log_type_schedule: { es: 'Horario General', pt: 'Horário Geral' },
    log_type_note: { es: 'Notas Manuales', pt: 'Notas Manuais' },
};

// --- DATOS INICIALES (si no hay nada en localStorage) --- //
const INITIAL_DOTACION = {
    porto: {
        cocina: [ {id:"E01", nombre:"Ilaria", rol:"Chef", contratoSem:40}, {id:"E02", nombre:"Andrés P.", rol:"Parrilla/Fogón", contratoSem:40}, {id:"E03", nombre:"Geny Q.", rol:"Copa", contratoSem:40}, {id:"E04", nombre:"Eduarda G.", rol:"Fríos", contratoSem:40}, {id:"E05", nombre:"Luciana M.", rol:"Fogón", contratoSem:40} ],
        salon: [ {id:"E06", nombre:"Rocío Ríos", rol:"Jefa de sala", contratoSem:40}, {id:"E07", nombre:"George C.", rol:"Sala", contratoSem:40}, {id:"E08", nombre:"Franco B.", rol:"Bar y sala", contratoSem:40}, {id:"E09", nombre:"Lorena", rol:"Sala", contratoSem:40}, {id:"E10", nombre:"Kleiton", rol:"Sala", contratoSem:40} ]
    },
    praia: {
        cocina: [ {id:"E11", nombre:"Soledade N.", rol:"Responsable", contratoSem:40}, {id:"E12", nombre:"María Belén", rol:"Chef", contratoSem:40}, {id:"E13", nombre:"Ana Vieira", rol:"Fogón/Fríos/Parrilla", contratoSem:40}, {id:"E14", nombre:"Cristian G.", rol:"Fogón/Parrilla/Fríos", contratoSem:40}, {id:"E15", nombre:"Olimpia P.", rol:"Fogón/Fríos", contratoSem:40}, {id:"E16", nombre:"Matías", rol:"Fogón", contratoSem:40}, {id:"E17", nombre:"Jany", rol:"Fríos/Pase", contratoSem:40}, {id:"E18", nombre:"Victoria", rol:"Fríos", contratoSem:40}, {id:"E19", nombre:"Kevin", rol:"Copa", contratoSem:20} ],
        salon: [ {id:"E20", nombre:"Gonzalo", rol:"Jefe de sala", contratoSem:40}, {id:"E21", nombre:"Miguel", rol:"Jefe de sala", contratoSem:40}, {id:"E22", nombre:"Ninorka", rol:"Sala y bar", contratoSem:40}, {id:"E23", nombre:"Lucía", rol:"Sala y bar", contratoSem:40}, {id:"E24", nombre:"Santiago", rol:"Sala y bar", contratoSem:40}, {id:"E25", nombre:"Lorena", rol:"Sala y bar", contratoSem:40}, {id:"E26", nombre:"Daina", rol:"Sala y bar", contratoSem:40}, {id:"E27", nombre:"Jhoselyn", rol:"Sala y bar", contratoSem:40}, {id:"E28", nombre:"Gabriela", rol:"Sala y bar", contratoSem:40}, {id:"E29", nombre:"Yefri", rol:"Sala y bar", contratoSem:40} ]
    }
};

const CURVAS = {
    porto: {
        F_mes: {"Enero":0.9063, "Febrero":0.7346, "Marzo":1.1724, "Abril":1.0321, "Mayo":1.0165, "Junio":1.1355, "Julio":0.9275, "Agosto":1.0334, "Septiembre":1.2520, "Octubre":1.0492, "Noviembre":0.7947, "Diciembre":0.9457},
        F_dia: {lunes:0.85, martes:0.9, miércoles:0.95, jueves:1.05, viernes:1.15, sábado:1.2, domingo:0},
        F_hora: {
            lunes:   {"12:00":0.3,"13:00":0.5,"14:00":0.6,"15:00":0.4,"16:00":0.2,"17:00":0.2,"18:00":0.6,"19:00":0.8,"20:00":1.1,"21:00":1.4,"22:00":1.2,"23:00":1.0,"24:00":0.5},
            martes:  {"12:00":0.3,"13:00":0.5,"14:00":0.7,"15:00":0.5,"16:00":0.3,"17:00":0.3,"18:00":0.7,"19:00":0.9,"20:00":1.3,"21:00":1.6,"22:00":1.5,"23:00":1.2,"24:00":0.7},
            miércoles:{"12:00":0.4,"13:00":0.6,"14:00":0.8,"15:00":0.6,"16:00":0.3,"17:00":0.3,"18:00":0.8,"19:00":1.0,"20:00":1.4,"21:00":1.7,"22:00":1.6,"23:00":1.4,"24:00":0.8},
            jueves:  {"12:00":0.4,"13:00":0.6,"14:00":0.8,"15:00":0.7,"16:00":0.4,"17:00":0.4,"18:00":0.9,"19:00":1.1,"20:00":1.5,"21:00":1.8,"22:00":1.8,"23:00":1.6,"24:00":1.0},
            viernes: {"12:00":0.5,"13:00":0.7,"14:00":0.9,"15:00":0.8,"16:00":0.5,"17:00":0.5,"18:00":1.0,"19:00":1.2,"20:00":1.7,"21:00":2.0,"22:00":2.0,"23:00":1.8,"24:00":1.4},
            sábado: {"12:00":0.6,"13:00":0.8,"14:00":1.0,"15:00":0.9,"16:00":0.6,"17:00":0.6,"18:00":1.1,"19:00":1.3,"20:00":1.8,"21:00":2.2,"22:00":2.2,"23:00":2.0,"24:00":1.6},
            domingo: {}
        }
    },
    praia: {
        F_mes: {"Enero":0.5080, "Febrero":0.5990, "Marzo":0.7557, "Abril":0.6984, "Mayo":1.0377, "Junio":1.2892, "Julio":1.3418, "Agosto":1.6959, "Septiembre":1.4157, "Octubre":0.9066, "Noviembre":0.8191, "Diciembre":0.9329},
        F_dia: {lunes:0.7, martes:0.75, miércoles:0.8, jueves:0.9, viernes:1.2, sábado:2.8, domingo:1.5},
        F_hora: {
            lunes:   {"12:00":0.4,"13:00":0.6,"14:00":0.9,"15:00":1.2,"16:00":1.0,"17:00":0.8,"18:00":0.7,"19:00":0.8,"20:00":0.6,"21:00":0.8,"22:00":1.0,"23:00":1.2,"24:00":0.8},
            martes:  {"12:00":0.4,"13:00":0.7,"14:00":1.0,"15:00":1.3,"16:00":1.1,"17:00":0.9,"18:00":0.8,"19:00":0.9,"20:00":0.7,"21:00":0.9,"22:00":1.1,"23:00":1.3,"24:00":0.9},
            miércoles:{"12:00":0.5,"13:00":0.8,"14:00":1.1,"15:00":1.4,"16:00":1.2,"17:00":1.0,"18:00":0.9,"19:00":1.0,"20:00":0.8,"21:00":1.0,"22:00":1.2,"23:00":1.4,"24:00":1.0},
            jueves:  {"12:00":0.5,"13:00":0.9,"14:00":1.3,"15:00":1.6,"16:00":1.4,"17:00":1.1,"18:00":1.0,"19:00":1.1,"20:00":0.9,"21:00":1.1,"22:00":1.4,"23:00":1.6,"24:00":1.1},
            viernes: {"12:00":0.6,"13:00":1.0,"14:00":1.5,"15:00":1.8,"16:00":1.7,"17:00":1.4,"18:00":1.2,"19:00":1.3,"20:00":1.1,"21:00":1.3,"22:00":1.6,"23:00":1.9,"24:00":1.4},
            sábado: {"12:00":0.8,"13:00":1.2,"14:00":1.8,"15:00":2.2,"16:00":2.1,"17:00":1.8,"18:00":1.5,"19:00":1.4,"20:00":1.2,"21:00":1.5,"22:00":1.9,"23:00":2.2,"24:00":1.8},
            domingo: {"12:00":0.7,"13:00":1.1,"14:00":1.6,"15:00":2.0,"16:00":1.9,"17:00":1.6,"18:00":1.3,"19:00":1.2,"20:00":1.0,"21:00":1.2,"22:00":1.5,"23:00":1.8,"24:00":1.3}
        }
    }
};

const PARAMS_DEFAULT = { demandaDiaria: 100, capacidadMozoPorHora: 10, ratioCocina: 25, descansoMinHoras: 11, maxDiarioHoras: 8 };
const DIAS_KEYS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
const MESES_KEYS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const HORAS = Array.from({ length: 13 }, (_, i) => `${12 + i}:00`);
const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#6366f1', '#f97316', '#a855f7', '#d946ef', '#0ea5e9'];

// --- GESTIÓN DE ESTADO --- //
let state = {
    currentRestaurant: 'porto',
    currentLanguage: 'es',
    currentWeekStartDate: null, // YYYY-MM-DD format
    params: { ...PARAMS_DEFAULT },
    schedule: {
        porto: { cocina: {}, salon: {} },
        praia: { cocina: {}, salon: {} }
    },
    absences: {
        porto: {},
        praia: {}
    },
    dotacion: JSON.parse(JSON.stringify(INITIAL_DOTACION)), // Deep copy
    log: [],
    isAdmin: false,
    isDirty: false
};
let autoSaveTimeout = null;

const t = (key, replacements = {}) => {
    let text = translations[key]?.[state.currentLanguage] || key;
    for (const [placeholder, value] of Object.entries(replacements)) {
        text = text.replace(`{${placeholder}}`, String(value));
    }
    return text;
};

const debouncedSaveState = () => {
    clearTimeout(autoSaveTimeout);
    // Auto-save 1.5 seconds after the last change
    autoSaveTimeout = setTimeout(() => {
        if (state.isDirty) {
            saveState();
        }
    }, 1500);
};

const saveChangesBtn = document.getElementById('save-changes-btn');

const markDirty = () => {
    if (!state.isDirty) {
        state.isDirty = true;
        saveChangesBtn.classList.remove('hidden');
        // Reset button appearance in case it was just saved
        saveChangesBtn.textContent = t('saveChanges');
        saveChangesBtn.classList.remove('btn-success');
        saveChangesBtn.classList.add('btn-primary');
    }
    debouncedSaveState();
};

const saveState = () => {
    try {
        const stateToSave = { ...state };
        delete stateToSave.isAdmin; // El estado de admin se maneja por separado
        localStorage.setItem('scheduleAppState', JSON.stringify(stateToSave));
        state.isDirty = false;
        
        saveChangesBtn.textContent = t('saved');
        saveChangesBtn.classList.remove('btn-primary');
        saveChangesBtn.classList.add('btn-success');
        
        setTimeout(() => {
            saveChangesBtn.classList.add('hidden');
            saveChangesBtn.textContent = t('saveChanges');
            saveChangesBtn.classList.add('btn-primary');
            saveChangesBtn.classList.remove('btn-success');
        }, 2000);

    } catch (e) { console.error("Error guardando el estado:", e); }
};

const loadState = () => {
    try {
        const savedState = localStorage.getItem('scheduleAppState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            // Merge saved state into the default state structure
            Object.assign(state, parsedState);
            // Ensure nested objects exist
            state.schedule = parsedState.schedule || { porto: { cocina: {}, salon: {} }, praia: { cocina: {}, salon: {} } };
            state.absences = parsedState.absences || { porto: {}, praia: {} };
            state.dotacion = parsedState.dotacion || JSON.parse(JSON.stringify(INITIAL_DOTACION));
            state.log = parsedState.log || [];
        }
    } catch (e) { console.error("Error cargando el estado:", e); }
};

// --- ELEMENTOS DEL DOM --- //
const titleH1 = document.querySelector('header h1');
const languageSelector = document.getElementById('language-selector');
const restaurantTabs = document.getElementById('restaurant-tabs');
const restaurantSelectorMobile = document.getElementById('restaurant-selector-mobile');
const prevWeekBtn = document.getElementById('prev-week-btn');
const nextWeekBtn = document.getElementById('next-week-btn');
const todayBtn = document.getElementById('today-btn');
const autoAssignBtn = document.getElementById('auto-assign-btn');
const clearScheduleBtn = document.getElementById('clear-schedule-btn');
const kpiContainer = document.getElementById('kpi-container');
const employeeLoadBody = document.getElementById('employee-load-body');
const manageStaffBtn = document.getElementById('manage-staff-btn');
const logbookBtn = document.getElementById('logbook-btn');
const addNoteBtn = document.getElementById('add-note-btn');

// --- LÓGICA DE FECHAS --- //
const getMonday = (d) => {
    d = new Date(d);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
};

const dateToISOString = (date) => date.toISOString().split('T')[0];

const getCurrentWeekDates = () => {
    const startDate = new Date(state.currentWeekStartDate);
    return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        return date;
    });
};

const getDatesForMonth = (dateInMonth) => {
    const year = dateInMonth.getFullYear();
    const month = dateInMonth.getMonth();
    const date = new Date(year, month, 1);
    const dates = [];
    while (date.getMonth() === month) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return dates;
};

const isSameDate = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
};

const formatDate = (date, options) => {
     const locale = state.currentLanguage === 'pt' ? 'pt-PT' : 'es-ES';
     return date.toLocaleDateString(locale, options);
};


// --- LÓGICA DE CÁLCULO --- //
const employeeColorCache = {};
const getColorForEmployee = (employeeId) => {
    if (employeeColorCache[employeeId]) return employeeColorCache[employeeId];
    let hash = 0;
    for (let i = 0; i < employeeId.length; i++) {
        hash = employeeId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = COLORS[Math.abs(hash) % COLORS.length];
    employeeColorCache[employeeId] = color;
    return color;
};

const calculateHourlyDemand = (restaurant, date, hora) => {
    const curvas = CURVAS[restaurant];
    const params = state.params;
    
    const monthIndex = date.getMonth();
    const monthName = MESES_KEYS[monthIndex];
    const dayIndex = (date.getDay() + 6) % 7; // Monday = 0
    const dayName = DIAS_KEYS[dayIndex];

    const F_mes = curvas.F_mes[monthName] || 1;
    const F_dia = curvas.F_dia[dayName] || 0;
    const hourlyFactorsForDay = curvas.F_hora[dayName] || {};
    const sum_F_hora = Object.values(hourlyFactorsForDay).reduce((a, b) => a + b, 0);
    const F_hora = hourlyFactorsForDay[hora] || 0;

    if (sum_F_hora === 0 || F_dia === 0) return 0;

    const w_h = F_hora / sum_F_hora;
    
    const demandaDiariaAjustada = params.demandaDiaria * F_mes * F_dia;
    return demandaDiariaAjustada * w_h;
};

const calculateRequirements = (restaurant, date, hora) => {
    const params = state.params;
    const demand_h = calculateHourlyDemand(restaurant, date, hora);
    
    if (demand_h <= 0) return { reqCocina: 0, reqSalon: 0 };
    
    return {
        reqSalon: Math.ceil(demand_h / params.capacidadMozoPorHora),
        reqCocina: Math.ceil(demand_h / params.ratioCocina)
    };
};

// --- FUNCIONES AUXILIARES --- //
const showToast = (message) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: '2000',
        opacity: '0',
        transition: 'opacity 0.3s ease-out'
    });
    document.body.appendChild(toast);
    
    setTimeout(() => { toast.style.opacity = '1'; }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
};

const getEmployeeById = id => {
    for (const restaurant of Object.values(state.dotacion)) {
        for (const area of Object.values(restaurant)) {
            const found = area.find(e => e.id === id);
            if (found) return found;
        }
    }
    return null;
};
const getEmployeeArea = (id) => {
    for (const restaurantName in state.dotacion) {
        if (state.dotacion[restaurantName].cocina.some(e => e.id === id)) return 'cocina';
        if (state.dotacion[restaurantName].salon.some(e => e.id === id)) return 'salon';
    }
    return null;
};

const isEmployeeAbsent = (employeeId, dateString) => {
    const restaurantAbsences = state.absences[state.currentRestaurant];
    return restaurantAbsences?.[employeeId]?.some(absence => absence.date === dateString) || false;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const isEmployeeAssigned = (employeeId, restaurant, dateString, hora) => {
    return ['cocina', 'salon'].some(area => 
        state.schedule[restaurant][area]?.[dateString]?.[hora]?.includes(employeeId)
    );
};

// --- LÓGICA DE AUTO-ASIGNACIÓN --- //
const autoAssign = () => {
    // This now assigns for the whole month of the current week.
    state.schedule[state.currentRestaurant] = { cocina: {}, salon: {} };
    
    const monthDates = getDatesForMonth(new Date(state.currentWeekStartDate));

    assignAreaWithSplitShifts('cocina', monthDates);
    assignAreaWithSplitShifts('salon', monthDates);
    
    logAction('schedule_preassign', { restaurantName: state.currentRestaurant }, null);
    markDirty();
    fullRender();
};

const assignAreaWithSplitShifts = (area, monthDates) => {
    const restaurant = state.currentRestaurant;
    const dotacion = state.dotacion[restaurant][area].filter(e => e.contratoSem === 40);
    if (dotacion.length === 0) return;

    // Group dates by week
    const weeks = [];
    let currentWeek = [];
    monthDates.forEach(date => {
        currentWeek.push(date);
        if (date.getDay() === 0 || date.getDate() === monthDates[monthDates.length-1].getDate()) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });

    weeks.forEach(weekDates => {
         // 1. Determinar necesidades de cobertura semanales
        const weeklyNeeds = {};
        weekDates.forEach(date => {
            const dateString = dateToISOString(date);
            weeklyNeeds[dateString] = {};
            HORAS.forEach(hora => {
                const reqs = calculateRequirements(restaurant, date, hora);
                weeklyNeeds[dateString][hora] = area === 'cocina' ? reqs.reqCocina : reqs.reqSalon;
            });
        });

        // 2. Asignar días libres rotativos y consecutivos
        const daysOffPatterns = [[5, 6], [6, 0], [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]; // Sáb/Dom, Dom/Lun, etc.
        const employeeWorkDates = {};
        dotacion.forEach((employee, index) => {
            const offIndices = daysOffPatterns[index % daysOffPatterns.length];
            employeeWorkDates[employee.id] = weekDates
                .filter((date) => !offIndices.includes((date.getDay() + 6) % 7))
                .map(date => dateToISOString(date));
        });
        
        // 3. Asignar turnos día por día para la semana actual
        weekDates.forEach(date => {
            const dateString = dateToISOString(date);
            const employeesWorkingToday = dotacion.filter(e => 
                employeeWorkDates[e.id].includes(dateString) && !isEmployeeAbsent(e.id, dateString)
            );
            shuffleArray(employeesWorkingToday);

            employeesWorkingToday.forEach(employee => {
                let bestShift = { startIndex: -1, score: -Infinity };

                const possibleStartIndices = Array.from({ length: HORAS.length - 9 + 1 }, (_, i) => i);
                
                possibleStartIndices.forEach(startIndex => {
                    let currentScore = 0;
                    for (let i = 0; i < 4; i++) { // First part of split shift
                        const hora = HORAS[startIndex + i];
                        currentScore += weeklyNeeds[dateString][hora] || 0;
                    }
                    for (let i = 5; i < 9; i++) { // Second part of split shift
                        const hora = HORAS[startIndex + i];
                        currentScore += weeklyNeeds[dateString][hora] || 0;
                    }
                    
                    if (currentScore > bestShift.score) {
                        bestShift = { startIndex, score: currentScore };
                    }
                });

                if (bestShift.startIndex !== -1) {
                    const assignHour = (hora) => {
                        if (!state.schedule[restaurant][area][dateString]) state.schedule[restaurant][area][dateString] = {};
                        if (!state.schedule[restaurant][area][dateString][hora]) state.schedule[restaurant][area][dateString][hora] = [];
                        state.schedule[restaurant][area][dateString][hora].push(employee.id);

                        if (weeklyNeeds[dateString][hora] > 0) {
                            weeklyNeeds[dateString][hora]--;
                        }
                    };
                    
                    for (let i = 0; i < 4; i++) assignHour(HORAS[bestShift.startIndex + i]);
                    for (let i = 5; i < 9; i++) assignHour(HORAS[bestShift.startIndex + i]);
                }
            });
        });
    });
};

// --- LOGGING --- //
const logAction = (type, details, justification) => {
    const logEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        restaurant: state.currentRestaurant,
        type,
        details,
        justification
    };
    state.log.unshift(logEntry);
    markDirty();
};

// --- LÓGICA DE RENDERIZADO --- //

const renderUnifiedSchedule = () => {
    const container = document.getElementById('visual-schedule');
    container.innerHTML = '';
    const restaurant = state.currentRestaurant;
    const allEmployees = state.dotacion[restaurant];
    const weekDates = getCurrentWeekDates();
    const today = new Date();

    // Create Header
    const header = document.createElement('div');
    header.className = 'timeline-header';
    header.innerHTML = `<div class="header-cell employee-cell-header">${t('employee')}</div>`;
    weekDates.forEach((date, index) => {
        const isTodayClass = isSameDate(date, today) ? ' is-today' : '';
        const diaKey = DIAS_KEYS[index];
        header.innerHTML += `<div class="header-cell${isTodayClass}">${t(diaKey)}<br><span style="font-weight:normal; font-size: 0.9em;">${date.getDate()}</span></div>`;
    });
    container.appendChild(header);

    // Create Body
    const body = document.createElement('div');
    body.className = 'timeline-body';

    ['cocina', 'salon'].forEach(area => {
        const employeesInArea = allEmployees[area];
        if (employeesInArea.length === 0) return;

        const areaSeparator = document.createElement('div');
        areaSeparator.className = 'area-separator-row';
        areaSeparator.innerHTML = `<span>${t(area === 'cocina' ? 'kitchen' : 'diningRoom')}</span>`;
        body.appendChild(areaSeparator);

        employeesInArea.sort((a,b) => a.nombre.localeCompare(b.nombre)).forEach(employee => {
            const employeeShifts = getConsolidatedShifts(employee.id);
            const assignedHours = employeeShifts.reduce((acc, shift) => acc + shift.duration, 0);

            const row = document.createElement('div');
            row.className = 'timeline-row';
            row.dataset.employeeId = employee.id;
            
            let hoursClass = 'is-under-contract';
            if (assignedHours > employee.contratoSem) hoursClass = 'is-overtime';
            else if (assignedHours === employee.contratoSem) hoursClass = 'is-perfect';

            const employeeCell = document.createElement('div');
            employeeCell.className = 'employee-cell';
            employeeCell.innerHTML = `
                <strong>${employee.nombre}</strong>
                <small>${employee.rol}</small>
                <small class="weekly-hours ${hoursClass}">${assignedHours} / ${employee.contratoSem} hs</small>
            `;
            employeeCell.addEventListener('click', () => openAssignmentModal(employee.id));
            row.appendChild(employeeCell);

            weekDates.forEach(date => {
                const dateString = dateToISOString(date);
                const dayCell = document.createElement('div');
                const dayIndex = (date.getDay() + 6) % 7;
                const isWeekend = dayIndex === 5 || dayIndex === 6;
                dayCell.className = `day-cell${isWeekend ? ' is-weekend' : ''}`;
                dayCell.dataset.date = dateString;
                
                if(isEmployeeAbsent(employee.id, dateString)){
                    dayCell.classList.add('is-absent');
                    const absenceInfo = state.absences[restaurant][employee.id].find(a => a.date === dateString);
                    dayCell.title = `AUSENTE: ${absenceInfo.motivo}`;
                }

                const shiftsForDay = employeeShifts.filter(s => s.date === dateString);
                
                shiftsForDay.forEach(shift => {
                    const shiftBar = document.createElement('div');
                    shiftBar.className = 'shift-bar';
                    
                    const startHour = parseInt(shift.startTime.split(':')[0]);
                    const duration = shift.duration;

                    const left = ((startHour - 12) / 12) * 100;
                    const width = (duration / 12) * 100;

                    shiftBar.style.left = `${left}%`;
                    shiftBar.style.width = `${width}%`;
                    shiftBar.style.backgroundColor = getColorForEmployee(employee.id);
                    
                    let barText = '';
                    if (duration >= 5) barText = `${shift.startTime} - ${shift.endTime}`;
                    else if (duration >= 2) barText = `${startHour}-${parseInt(shift.endTime.split(':')[0])}`;
                    
                    shiftBar.textContent = barText;
                    shiftBar.title = `${employee.nombre} | ${shift.startTime} - ${shift.endTime} (${duration}hs)`;

                    dayCell.appendChild(shiftBar);
                });
                row.appendChild(dayCell);
            });
            body.appendChild(row);
        });
    });
    container.appendChild(body);
};

const renderKPIs = () => {
    kpiContainer.innerHTML = '';
    const restaurant = state.currentRestaurant;
    let totalRequired = 0, totalAssigned = 0, totalAbsenceHours = 0;
    const weekDates = getCurrentWeekDates();

    weekDates.forEach(date => {
        const dateString = dateToISOString(date);
        HORAS.forEach(hora => {
            const reqs = calculateRequirements(restaurant, date, hora);
            totalRequired += reqs.reqCocina + reqs.reqSalon;
            ['cocina', 'salon'].forEach(area => {
                const assignedInSlot = state.schedule[restaurant][area][dateString]?.[hora] || [];
                assignedInSlot.forEach(employeeId => {
                    if (isEmployeeAbsent(employeeId, dateString)) {
                        totalAbsenceHours++;
                    } else {
                        totalAssigned++;
                    }
                });
            });
        });
    });

    const coverage = totalRequired > 0 ? ((totalAssigned / totalRequired) * 100).toFixed(1) : '100.0';
    const deficit = Math.max(0, totalRequired - totalAssigned);
    const excess = Math.max(0, totalAssigned - totalRequired);

    const kpiMap = [
        { key: 'coverage', value: `${coverage}%` },
        { key: 'deficit', value: deficit },
        { key: 'excess', value: excess },
        { key: 'absenteeismHours', value: totalAbsenceHours }
    ];

    kpiMap.forEach(kpi => {
        const card = document.createElement('div');
        card.className = 'kpi-card';
        card.innerHTML = `<h3>${t(kpi.key)}</h3><div class="value">${kpi.value}</div>`;
        kpiContainer.appendChild(card);
    });
};

const renderEmployeeLoad = () => {
    const header = document.getElementById('employee-load-header');
    header.innerHTML = `
        <th>${t('employee')}</th>
        <th>${t('role')}</th>
        <th>${t('assignedHours')}</th>
        <th>${t('contractHours')}</th>
        <th>${t('balance')}</th>
        <th>${t('actions')}</th>
    `;

    employeeLoadBody.innerHTML = '';
    const restaurant = state.currentRestaurant;
    const allEmployees = [...state.dotacion[restaurant].cocina, ...state.dotacion[restaurant].salon];
    const weekDates = getCurrentWeekDates();

    allEmployees.sort((a,b) => a.nombre.localeCompare(b.nombre)).forEach(employee => {
        let assignedHours = 0;
        weekDates.forEach(date => {
            const dateString = dateToISOString(date);
            if (!isEmployeeAbsent(employee.id, dateString)) {
                HORAS.forEach(hora => { 
                    if (isEmployeeAssigned(employee.id, restaurant, dateString, hora)) { 
                        assignedHours++; 
                    } 
                });
            }
        });
        
        const balance = assignedHours - employee.contratoSem;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><div style="display: flex; align-items: center; gap: 8px;"><span class="employee-color-dot" style="background-color:${getColorForEmployee(employee.id)};"></span>${employee.nombre}</div></td>
            <td>${employee.rol}</td>
            <td>${assignedHours}</td>
            <td>${employee.contratoSem}</td>
            <td style="color: ${balance > 0 ? 'var(--color-warning)' : (balance < 0 ? 'var(--color-text-muted)' : 'var(--color-success)')}; font-weight: bold;">${balance > 0 ? '+' : ''}${balance}</td>
            <td class="actions-cell">
                <button class="action-icon-btn" data-action="export-pdf" data-id="${employee.id}" title="${t('exportPDF')}">&#128229;</button>
                <button class="action-icon-btn" data-action="register-absence" data-id="${employee.id}" title="${t('registerAbsence')}">&#128197;</button>
            </td>
        `;
        employeeLoadBody.appendChild(row);
    });
};

const renderWeekSelector = () => {
    const weekDates = getCurrentWeekDates();
    const startOfWeek = weekDates[0];
    const endOfWeek = weekDates[6];
    
    const formatOptions = { day: 'numeric', month: 'short' };
    const startStr = formatDate(startOfWeek, formatOptions);
    const endStr = formatDate(endOfWeek, formatOptions);
    
    document.getElementById('week-display').textContent = `${startStr} - ${endStr}`;
};

const updateUIText = () => {
    document.documentElement.lang = state.currentLanguage;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        const targetEl = el.querySelector('span[data-lang-key]') || el;
        targetEl.textContent = t(key);
    });
     document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
        const key = el.dataset.langKeyPlaceholder;
        el.placeholder = t(key);
    });
    document.getElementById('rules-text').innerHTML = t('rulesText');
    document.getElementById('logbook-btn').title = t('changeLogbook');
    fullRender();
};

const updateAdminControls = () => {
    const adminButtons = [autoAssignBtn, clearScheduleBtn];
    adminButtons.forEach(btn => {
        btn.classList.toggle('hidden', !state.isAdmin);
    });
    document.getElementById('admin-badge').classList.toggle('hidden', !state.isAdmin);
};

const fullRender = () => {
    renderWeekSelector();
    renderUnifiedSchedule();
    renderKPIs();
    renderEmployeeLoad();
};

// --- MANEJADORES DE EVENTOS --- //
saveChangesBtn.addEventListener('click', saveState);

window.addEventListener('beforeunload', () => {
    if (state.isDirty) {
        clearTimeout(autoSaveTimeout); // Cancel any pending auto-save
        saveState(); // Save immediately
    }
});

languageSelector.addEventListener('change', (e) => {
    state.currentLanguage = e.target.value;
    updateUIText();
});

const updateRestaurantControls = (newRestaurant) => {
    document.querySelectorAll('#restaurant-tabs .tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.restaurant === newRestaurant);
    });
    restaurantSelectorMobile.value = newRestaurant;
};

const handleRestaurantChange = (newRestaurant) => {
    if (state.currentRestaurant !== newRestaurant) {
        state.currentRestaurant = newRestaurant;
        updateRestaurantControls(newRestaurant);
        fullRender();
    }
};

restaurantTabs.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (tab && tab.dataset.restaurant) {
        handleRestaurantChange(tab.dataset.restaurant);
    }
});

restaurantSelectorMobile.addEventListener('change', (e) => {
    handleRestaurantChange(e.target.value);
});

const changeWeek = (days) => {
    const currentDate = new Date(state.currentWeekStartDate);
    currentDate.setDate(currentDate.getDate() + days);
    state.currentWeekStartDate = dateToISOString(currentDate);
    fullRender();
};

prevWeekBtn.addEventListener('click', () => changeWeek(-7));
nextWeekBtn.addEventListener('click', () => changeWeek(7));
todayBtn.addEventListener('click', () => {
    state.currentWeekStartDate = dateToISOString(getMonday(new Date()));
    fullRender();
});

autoAssignBtn.addEventListener('click', autoAssign);

clearScheduleBtn.addEventListener('click', () => {
    const details = { restaurantName: state.currentRestaurant };
    logAction('schedule_clear', details, null);
    
    state.schedule[state.currentRestaurant] = { cocina: {}, salon: {} };
    markDirty();
    fullRender();
});


// --- GESTIÓN DE MODALES --- //
const openModal = (modalId) => document.getElementById(modalId).classList.add('is-visible');
const closeModal = (modalId) => document.getElementById(modalId).classList.remove('is-visible');

document.addEventListener('click', (e) => {
    const closeTrigger = e.target.closest('.modal-close, .modal-footer .btn-secondary[data-modal-id]');
    if (closeTrigger) {
        const modalId = closeTrigger.dataset.modalId;
        if (modalId) {
            closeModal(modalId);
        }
    }
});

// --- LÓGICA DE GESTIÓN DE PERSONAL (STAFF) --- //
manageStaffBtn.addEventListener('click', () => {
    renderStaffModal();
    openModal('staff-modal');
});

const renderStaffModal = () => {
    const restaurant = state.currentRestaurant;
    const staffCocinaList = document.getElementById('staff-list-cocina');
    const staffSalonList = document.getElementById('staff-list-salon');
    staffCocinaList.innerHTML = '';
    staffSalonList.innerHTML = '';
    
    const createListItem = (employee) => {
        const li = document.createElement('li');
        li.className = 'staff-list-item';
        li.innerHTML = `
            <span>
                <strong style="color:${getColorForEmployee(employee.id)}">${employee.nombre}</strong> 
                <small>(${employee.rol} - ${employee.contratoSem}hs)</small>
            </span>
            <span class="staff-actions">
                <button data-action="edit" data-id="${employee.id}" title="Editar">&#9998;</button>
                <button data-action="delete" data-id="${employee.id}" title="Eliminar">&#128465;</button>
            </span>
        `;
        return li;
    };

    state.dotacion[restaurant].cocina.forEach(e => staffCocinaList.appendChild(createListItem(e)));
    state.dotacion[restaurant].salon.forEach(e => staffSalonList.appendChild(createListItem(e)));
};

document.getElementById('staff-modal').addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;
    
    if (button.id === 'add-staff-cocina-btn') openStaffEditModal('cocina');
    if (button.id === 'add-staff-salon-btn') openStaffEditModal('salon');
    
    const { action, id } = button.dataset;
    const area = getEmployeeArea(id);
    if (action === 'edit' && area) openStaffEditModal(area, id);
    if (action === 'delete') deleteEmployee(id);
});

const openStaffEditModal = (area, employeeId = null) => {
    const form = document.getElementById('staff-edit-form');
    form.reset();
    document.getElementById('staff-edit-id').value = employeeId || '';
    document.getElementById('staff-edit-area').value = area;
    const titleEl = document.getElementById('staff-edit-title');

    if (employeeId) {
        const employee = getEmployeeById(employeeId);
        titleEl.textContent = t('editEmployee');
        document.getElementById('staff-edit-nombre').value = employee.nombre;
        document.getElementById('staff-edit-rol').value = employee.rol;
        document.getElementById('staff-edit-contrato').value = String(employee.contratoSem);
    } else {
        titleEl.textContent = t('addEmployeeTo', { area: t(area === 'cocina' ? 'kitchen' : 'diningRoom') });
    }
    openModal('staff-edit-modal');
};

document.getElementById('staff-edit-save').addEventListener('click', () => {
    const id = document.getElementById('staff-edit-id').value;
    const area = document.getElementById('staff-edit-area').value;
    const restaurant = state.currentRestaurant;
    const employeeData = {
        nombre: document.getElementById('staff-edit-nombre').value.trim(),
        rol: document.getElementById('staff-edit-rol').value.trim(),
        contratoSem: parseInt(document.getElementById('staff-edit-contrato').value, 10)
    };
    if (!employeeData.nombre || !employeeData.rol || isNaN(employeeData.contratoSem)) {
        alert(t('completeAllFields')); return;
    }

    if (id) {
        const employeeIndex = state.dotacion[restaurant][area].findIndex(e => e.id === id);
        if (employeeIndex > -1) {
            state.dotacion[restaurant][area][employeeIndex] = { ...state.dotacion[restaurant][area][employeeIndex], ...employeeData };
             logAction('staff_edit', { employeeId: id, employeeName: employeeData.nombre }, null);
        }
    } else {
        employeeData.id = 'E' + Date.now();
        state.dotacion[restaurant][area].push(employeeData);
        logAction('staff_add', { employeeId: employeeData.id, employeeName: employeeData.nombre, area }, null);
    }
    renderStaffModal();
    markDirty();
    closeModal('staff-edit-modal');
    fullRender();
});

const deleteEmployee = (employeeId) => {
    if (!confirm(t('confirmDeleteEmployee'))) return;
    
    const restaurant = state.currentRestaurant;
    const employee = getEmployeeById(employeeId);
    
    logAction('staff_remove', { employeeId: employee.id, employeeName: employee.nombre }, null);

    ['cocina', 'salon'].forEach(area => {
        if (!state.schedule[restaurant][area]) return;
        Object.keys(state.schedule[restaurant][area]).forEach(dateString => {
            Object.keys(state.schedule[restaurant][area][dateString]).forEach(hora => {
                state.schedule[restaurant][area][dateString][hora] = state.schedule[restaurant][area][dateString][hora].filter(id => id !== employeeId);
            });
        });
    });

    const employeeArea = getEmployeeArea(employeeId);
    if (employeeArea) {
         state.dotacion[restaurant][employeeArea] = state.dotacion[restaurant][employeeArea].filter(e => e.id !== employeeId);
    }
    
    if (state.absences[restaurant]?.[employeeId]) {
        delete state.absences[restaurant][employeeId];
    }
    
    renderStaffModal();
    markDirty();
    fullRender();
};

// --- LÓGICA DE ASIGNACIÓN POR CLIC --- //
let currentAssignmentState = { employeeId: null, tempSchedule: {} };

const openAssignmentModal = (employeeId) => {
    const employee = getEmployeeById(employeeId);
    const area = getEmployeeArea(employeeId);
    if (!employee || !area) return;
    
    currentAssignmentState.employeeId = employeeId;
    currentAssignmentState.tempSchedule = {};

    document.getElementById('assignment-title').textContent = t('assignShiftsFor', { employeeName: employee.nombre });
    
    const grid = document.getElementById('assignment-grid');
    grid.innerHTML = '';
    grid.dataset.area = area;
    
    const weekDates = getCurrentWeekDates();

    grid.appendChild(document.createElement('div'));
    weekDates.forEach((date, i) => grid.innerHTML += `<div>${t(DIAS_KEYS[i]).substring(0,3)} ${date.getDate()}</div>`);
    
    HORAS.forEach(hora => {
        grid.innerHTML += `<div>${hora}</div>`;
        weekDates.forEach(date => {
            const dateString = dateToISOString(date);
            const cell = document.createElement('div');
            cell.className = 'assign-cell';
            cell.dataset.date = dateString;
            cell.dataset.hora = hora;
            if (isEmployeeAssigned(employeeId, state.currentRestaurant, dateString, hora)) {
                cell.classList.add('is-assigned');
            }
            grid.appendChild(cell);
        });
    });
    updateAssignmentSubtitle();
    openModal('assignment-modal');
};

document.getElementById('assignment-grid').addEventListener('click', e => {
    const cell = e.target.closest('.assign-cell');
    if (!cell) return;
    cell.classList.toggle('is-assigned');
    updateAssignmentSubtitle();
});

const updateAssignmentSubtitle = () => {
    const employee = getEmployeeById(currentAssignmentState.employeeId);
    const assignedCount = document.querySelectorAll('#assignment-grid .assign-cell.is-assigned').length;
    const subtitle = document.getElementById('assignment-subtitle');
    subtitle.textContent = t('assignedHoursOf', { assigned: assignedCount, contract: employee.contratoSem });
    subtitle.style.color = assignedCount > employee.contratoSem ? 'var(--color-warning)' : 'var(--color-text-muted)';
};

document.getElementById('assignment-save-btn').addEventListener('click', () => {
    const employeeId = currentAssignmentState.employeeId;
    logAction('shift_move', { employeeId }, null);

    const restaurant = state.currentRestaurant;
    const area = document.getElementById('assignment-grid').dataset.area;
    
    const weekDates = getCurrentWeekDates();
    weekDates.forEach(date => {
        const dateString = dateToISOString(date);
        HORAS.forEach(hora => {
            const assignments = state.schedule[restaurant][area]?.[dateString]?.[hora];
            if (assignments) {
                const index = assignments.indexOf(employeeId);
                if (index > -1) assignments.splice(index, 1);
            }
        });
    });
    
    document.querySelectorAll('#assignment-grid .assign-cell.is-assigned').forEach(cell => {
        const { date, hora } = cell.dataset;
        if (!state.schedule[restaurant][area][date]) state.schedule[restaurant][area][date] = {};
        if (!state.schedule[restaurant][area][date][hora]) state.schedule[restaurant][area][date][hora] = [];
        if (!state.schedule[restaurant][area][date][hora].includes(employeeId)) {
            state.schedule[restaurant][area][date][hora].push(employeeId);
        }
    });
    
    markDirty();
    closeModal('assignment-modal');
    fullRender();
});

// --- LÓGICA EXPORTAR PDF Y CÁLCULO DE TURNOS --- //
const getConsolidatedShifts = (employeeId) => {
    const restaurant = state.currentRestaurant;
    const allSlots = [];
    const weekDates = getCurrentWeekDates();

    weekDates.forEach(date => {
        const dateString = dateToISOString(date);
        if (isEmployeeAbsent(employeeId, dateString)) return;

        HORAS.forEach(hora => {
            if (isEmployeeAssigned(employeeId, restaurant, dateString, hora)) {
                allSlots.push({ date: dateString, hora: parseInt(hora.split(':')[0], 10) });
            }
        });
    });

    if (allSlots.length === 0) return [];

    const consolidatedShifts = [];
    weekDates.forEach(date => {
        const dateString = dateToISOString(date);
        const dailySlots = allSlots.filter(s => s.date === dateString).map(s => s.hora).sort((a, b) => a - b);
        if (dailySlots.length === 0) return;

        let currentShift = { date: dateString, startTime: dailySlots[0], endTime: dailySlots[0] };

        for (let i = 1; i < dailySlots.length; i++) {
            if (dailySlots[i] === currentShift.endTime + 1) {
                currentShift.endTime = dailySlots[i];
            } else {
                consolidatedShifts.push({ ...currentShift, endTime: currentShift.endTime + 1 });
                currentShift = { date: dateString, startTime: dailySlots[i], endTime: dailySlots[i] };
            }
        }
        consolidatedShifts.push({ ...currentShift, endTime: currentShift.endTime + 1 });
    });
    
    return consolidatedShifts.map(s => ({
        ...s,
        startTime: `${s.startTime}:00`,
        endTime: `${s.endTime}:00`,
        duration: s.endTime - s.startTime
    }));
};

const getEmployeeShiftsForPDF = (employeeId) => {
    const shifts = getConsolidatedShifts(employeeId);
    return shifts.map(s => {
        const date = new Date(s.date + 'T00:00:00');
        const dayIndex = (date.getDay() + 6) % 7;
        return {...s, dia: t(DIAS_KEYS[dayIndex]) + ` ${date.getDate()}` };
    });
};

const exportEmployeeSchedulePDF = (employeeId) => {
    const employee = getEmployeeById(employeeId);
    if (!employee) return;

    const shifts = getEmployeeShiftsForPDF(employeeId);
    const totalHours = shifts.reduce((acc, s) => acc + s.duration, 0);
    const balance = totalHours - employee.contratoSem;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text(`${t('weeklyScheduleFor')} ${employee.nombre}`, 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    
    const weekDates = getCurrentWeekDates();
    const weekStart = weekDates[0];
    const weekEnd = weekDates[6];
    const monthName = t('full_' + MESES_KEYS[weekStart.getMonth()].toLowerCase());
    doc.text(`${t('weekOf')} ${weekStart.getDate()} ${t('to')} ${weekEnd.getDate()} de ${monthName} ${weekStart.getFullYear()}`, 14, 30);
    doc.text(`${t('restaurant')}: ${state.currentRestaurant === 'porto' ? 'Belos Aires Porto' : 'Belos Aires Praia'}`, 14, 36);

    const tableColumn = [t('dayPDF'), t('startTime'), t('endTime'), t('durationHs')];
    const tableRows = shifts.map(s => [s.dia, s.startTime, s.endTime, s.duration]);
    
    doc.autoTable({
        head: [tableColumn], body: tableRows, startY: 50, theme: 'striped',
        headStyles: { fillColor: [44, 49, 58] },
    });
    
    const finalY = doc.lastAutoTable.finalY || 100;
    doc.setFontSize(12);
    doc.text(t('hoursSummary'), 14, finalY + 15);
    doc.setFontSize(10);
    doc.text(`- ${t('totalAssignedHours')} ${totalHours} hs`, 14, finalY + 22);
    doc.text(`- ${t('contractHoursPDF')} ${employee.contratoSem} hs`, 14, finalY + 28);
    doc.text(`- ${t('balancePDF')} ${balance > 0 ? '+' : ''}${balance} hs`, 14, finalY + 34);

    doc.save(`Horario_${employee.nombre.replace(' ', '_')}_${state.currentWeekStartDate}.pdf`);
};

// --- LÓGICA DE AUSENTISMO --- //
const absenceForm = document.getElementById('absence-form');
const absenceDaySelect = document.getElementById('absence-day');
const absenceReasonSelect = document.getElementById('absence-reason');

const populateAbsenceSelects = () => {
    absenceDaySelect.innerHTML = '';
    getCurrentWeekDates().forEach((date, i) => {
        const dateString = dateToISOString(date);
        const optionText = `${t(DIAS_KEYS[i])} ${date.getDate()}`;
        absenceDaySelect.add(new Option(optionText, dateString));
    });

    absenceReasonSelect.innerHTML = '';
    const reasons = ['sick', 'vacation', 'personalMatter', 'other'];
    reasons.forEach(reasonKey => {
        absenceReasonSelect.add(new Option(t(reasonKey), reasonKey));
    });
};

const openAbsenceModal = (employeeId) => {
    const employee = getEmployeeById(employeeId);
    if (!employee) return;

    document.getElementById('absence-modal-title').textContent = t('registerAbsenceFor', { employeeName: employee.nombre });
    document.getElementById('absence-employee-id').value = employeeId;
    absenceForm.reset();
    populateAbsenceSelects();
    
    renderAbsenceList(employeeId);
    openModal('absence-modal');
};

const renderAbsenceList = (employeeId) => {
    const listElement = document.getElementById('absence-list');
    listElement.innerHTML = '';
    const restaurantAbsences = state.absences[state.currentRestaurant][employeeId] || [];
    
    if (restaurantAbsences.length === 0) {
        listElement.innerHTML = `<li style="color: var(--color-text-muted); font-style: italic; padding: 0.5rem;">${t('noAbsencesRegistered')}</li>`;
        return;
    }

    restaurantAbsences.forEach(absence => {
        const date = new Date(absence.date + 'T00:00:00');
        const dayIndex = (date.getDay() + 6) % 7;
        const dateText = `${t(DIAS_KEYS[dayIndex])} ${date.getDate()}`;
        const li = document.createElement('li');
        li.className = 'absence-list-item';
        li.innerHTML = `
            <div>
                <span><strong>${dateText}:</strong> ${t(absence.motivo)}</span>
                ${absence.notas ? `<small>${absence.notas}</small>` : ''}
            </div>
            <button class="btn btn-danger btn-sm" data-action="delete-absence" data-date="${absence.date}" title="Eliminar Ausencia">&times;</button>
        `;
        listElement.appendChild(li);
    });
};

absenceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const employeeId = document.getElementById('absence-employee-id').value;
    const employee = getEmployeeById(employeeId);
    const date = document.getElementById('absence-day').value;
    const motivo = document.getElementById('absence-reason').value;
    const notas = document.getElementById('absence-notes').value.trim();
    const dateObj = new Date(date + 'T00:00:00');
    const dayIndex = (dateObj.getDay() + 6) % 7;
    const dayName = t(DIAS_KEYS[dayIndex]) + ' ' + dateObj.getDate();

    const details = { employeeId, employeeName: employee.nombre, day: dayName, reason: motivo, notes: notas, date: date };
    logAction('absence_add', details, null);

    const restaurant = state.currentRestaurant;
    if (!state.absences[restaurant][employeeId]) state.absences[restaurant][employeeId] = [];
    state.absences[restaurant][employeeId] = state.absences[restaurant][employeeId].filter(a => a.date !== date);
    state.absences[restaurant][employeeId].push({ date, motivo, notas });
    
    renderAbsenceList(employeeId);
    markDirty();
    fullRender();
    absenceForm.reset();
});


document.getElementById('absence-list').addEventListener('click', e => {
    const deleteButton = e.target.closest('button[data-action="delete-absence"]');
    if (deleteButton) {
        const employeeId = document.getElementById('absence-employee-id').value;
        const dateToDelete = deleteButton.dataset.date;
        const restaurant = state.currentRestaurant;
        const employee = getEmployeeById(employeeId);
        const dateObj = new Date(dateToDelete + 'T00:00:00');
        const dayIndex = (dateObj.getDay() + 6) % 7;
        const dayName = t(DIAS_KEYS[dayIndex]) + ' ' + dateObj.getDate();

        if (state.absences[restaurant][employeeId]) {
            state.absences[restaurant][employeeId] = state.absences[restaurant][employeeId].filter(a => a.date !== dateToDelete);
             logAction('absence_remove', { employeeId, employeeName: employee.nombre, day: dayName, date: dateToDelete }, null);
        }
        
        renderAbsenceList(employeeId);
        markDirty();
        fullRender();
    }
});

// --- EVENTOS DE TABLA DE EMPLEADOS --- //
employeeLoadBody.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;
    
    const employeeId = button.dataset.id;
    const action = button.dataset.action;

    if (action === 'export-pdf') {
        exportEmployeeSchedulePDF(employeeId);
    } else if (action === 'register-absence') {
        openAbsenceModal(employeeId);
    }
});

// --- LOGBOOK LOGIC --- //
logbookBtn.addEventListener('click', () => {
    populateLogFilters();
    renderLogbook();
    openModal('log-modal');
});

const populateLogFilters = () => {
    const employeeFilter = document.getElementById('log-filter-employee');
    const typeFilter = document.getElementById('log-filter-type');
    
    employeeFilter.innerHTML = `<option value="">${t('allEmployees')}</option>`;
    const allEmployees = [...state.dotacion.porto.cocina, ...state.dotacion.porto.salon, ...state.dotacion.praia.cocina, ...state.dotacion.praia.salon];
    const uniqueEmployees = [...new Map(allEmployees.map(item => [item['id'], item])).values()].sort((a,b) => a.nombre.localeCompare(b.nombre));
    uniqueEmployees.forEach(emp => {
        employeeFilter.add(new Option(emp.nombre, emp.id));
    });

    typeFilter.innerHTML = `<option value="">${t('allTypes')}</option>`;
    const logTypes = {
        shift: 'log_type_shift',
        absence: 'log_type_absence',
        staff: 'log_type_staff',
        schedule: 'log_type_schedule',
        note: 'log_type_note'
    };
    Object.entries(logTypes).forEach(([key, langKey]) => {
        typeFilter.add(new Option(t(langKey), key));
    });
};

const renderLogbook = () => {
    const list = document.getElementById('log-list');
    list.innerHTML = '';
    
    const employeeFilter = document.getElementById('log-filter-employee').value;
    const typeFilter = document.getElementById('log-filter-type').value;
    const startDateFilter = document.getElementById('log-filter-start-date').value;
    const endDateFilter = document.getElementById('log-filter-end-date').value;

    const filteredLogs = state.log.filter(log => {
        if (employeeFilter && (log.details.employeeId !== employeeFilter)) return false;
        if (typeFilter && !log.type.startsWith(typeFilter)) return false;
        
        const logDate = new Date(log.timestamp);
        if (startDateFilter) {
            const startDate = new Date(startDateFilter);
            startDate.setHours(0,0,0,0);
            if (logDate < startDate) return false;
        }
        if (endDateFilter) {
            const endDate = new Date(endDateFilter);
            endDate.setHours(23,59,59,999);
            if (logDate > endDate) return false;
        }
        return true;
    });
    
    if (filteredLogs.length === 0) {
         list.innerHTML = `<li style="text-align: center; padding: 2rem; color: var(--color-text-muted);">${t('noLogsFound')}</li>`;
         return;
    }

    filteredLogs.forEach(log => {
        const li = document.createElement('li');
        li.className = 'log-entry';
        const justificationHtml = log.justification ? `<p class="log-justification">"${log.justification}"</p>` : '';
        li.innerHTML = `
            <div class="log-icon">${getLogIcon(log.type)}</div>
            <div class="log-details">
                <p class="log-description">${formatLogMessage(log)}</p>
                ${justificationHtml}
                <p class="log-meta">${new Date(log.timestamp).toLocaleString(state.currentLanguage, {dateStyle:'short', timeStyle:'short'})} - ${log.restaurant}</p>
            </div>
        `;
        list.appendChild(li);
    });
};

const getLogIcon = (type) => {
    if (type.startsWith('shift')) return '🔄';
    if (type.startsWith('absence')) return '🗓️';
    if (type.startsWith('staff')) return '👥';
    if (type.startsWith('schedule_clear')) return '🗑️';
    if (type.startsWith('schedule')) return '⚙️';
    if (type.startsWith('note')) return '📝';
    return 'ℹ️';
};

const formatLogMessage = (log) => {
    const { type, details } = log;
    const employee = details.employeeId ? getEmployeeById(details.employeeId) : null;
    const employeeName = employee ? employee.nombre : (details.employeeName || 'N/A');
    
    const day = details.day || 'N/A';

    switch (type) {
        case 'shift_add':
            return t('log_shift_add', { employeeName, area: t(details.targetArea), day: day, hour: details.targetHour });
        case 'shift_remove':
            return t('log_shift_remove', { employeeName, area: t(details.sourceArea), day: day, hour: details.sourceHour });
        case 'shift_move':
             if (!details.sourceDay) return t('log_shift_add', { employeeName, area: t(details.targetArea), day: day, hour: details.targetHour });
            return t('log_shift_move', { employeeName, sourceArea: t(details.sourceArea), sourceDay: details.sourceDay, sourceHour: details.sourceHour, targetArea: t(details.targetArea), targetDay: details.targetDay, targetHour: details.targetHour });
        case 'schedule_clear':
            return t('log_schedule_clear', { restaurantName: details.restaurantName });
        case 'schedule_preassign':
            return t('log_schedule_preassign', { restaurantName: details.restaurantName });
        case 'absence_add':
            return t('log_absence_add', { employeeName, day: day, reason: t(details.reason) });
        case 'absence_remove':
            return t('log_absence_remove', { employeeName, day: day });
        case 'staff_add':
            return t('log_staff_add', { employeeName, area: t(details.area) });
        case 'staff_edit':
            return t('log_staff_edit', { employeeName });
        case 'staff_remove':
            return t('log_staff_remove', { employeeName });
        case 'note_add':
            return t('log_note_add', { noteText: details.noteText });
        default:
            return `Acción desconocida: ${type}`;
    }
};

document.getElementById('log-filters').addEventListener('change', renderLogbook);
document.getElementById('log-clear-filters-btn').addEventListener('click', () => {
    document.getElementById('log-filter-employee').value = '';
    document.getElementById('log-filter-type').value = '';
    document.getElementById('log-filter-start-date').value = '';
    document.getElementById('log-filter-end-date').value = '';
    renderLogbook();
});

// --- NOTE MODAL LOGIC --- //
addNoteBtn.addEventListener('click', () => {
    document.getElementById('note-form').reset();
    openModal('note-modal');
});

document.getElementById('note-save-btn').addEventListener('click', () => {
    const noteTextarea = document.getElementById('note-textarea');
    const noteText = noteTextarea.value.trim();

    if (!noteText) {
        alert(t('pleaseWriteANote'));
        return;
    }

    logAction('note_add', { noteText }, null);
    markDirty();
    closeModal('note-modal');
});

// --- ADMIN MODE LOGIC --- //
const toggleAdminMode = () => {
    state.isAdmin = !state.isAdmin;
    localStorage.setItem('scheduleAppAdmin', state.isAdmin);
    updateAdminControls();
    const langKey = state.isAdmin ? 'adminModeActivated' : 'adminModeDeactivated';
    showToast(t(langKey));
};

let adminClickCount = 0;
let adminClickTimer = null;
titleH1.addEventListener('click', () => {
    adminClickCount++;
    clearTimeout(adminClickTimer);
    adminClickTimer = setTimeout(() => { adminClickCount = 0; }, 1500);

    if (adminClickCount >= 5) {
        toggleAdminMode();
        adminClickCount = 0;
        clearTimeout(adminClickTimer);
    }
});

// --- SERVICE WORKER REGISTRATION --- //
const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed: ', error);
                });
        });
    }
};


// --- INICIALIZACIÓN --- //
const init = () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    loadState(); // Carga datos de horarios, personal, etc.

    // Carga el estado de administrador por separado
    const savedAdminState = localStorage.getItem('scheduleAppAdmin');
    if (savedAdminState !== null) {
        state.isAdmin = savedAdminState === 'true';
    }

    // El parámetro URL puede anular el estado guardado y persistirlo
    if (urlParams.get('role') === 'admin') {
        state.isAdmin = true;
        localStorage.setItem('scheduleAppAdmin', 'true');
    }

    if (!state.currentWeekStartDate) {
        state.currentWeekStartDate = dateToISOString(getMonday(new Date()));
    }
    languageSelector.value = state.currentLanguage;
    updateRestaurantControls(state.currentRestaurant);
    updateAdminControls();
    updateUIText();
    registerServiceWorker(); // Register the service worker
};

init();
