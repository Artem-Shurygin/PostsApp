type User = {
	id: number;
	userName: string;
	postsIds: number[];
	albumsIds: number[];
	toDoList: ToDoList[];
};
type ToDoList = {
	id: number;
	task: string;
	completed: boolean;
	priority: string;
	category: string;
};

export const testDataUsers: User[] = [
	{
		id: 0,
		userName: "Dima",
		postsIds: [1, 2, 3, 4, 5],
		albumsIds: [1, 2, 3],
		toDoList: [
			{
				id: 0,
				task: "Сделать утреннюю зарядку",
				completed: true,
				priority: "medium",
				category: "здоровье",
			},
			{
				id: 1,
				task: "Купить продукты",
				completed: false,
				priority: "high",
				category: "быт",
			},
			{
				id: 2,
				task: "Прочитать книгу",
				completed: false,
				priority: "low",
				category: "развитие",
			},
			{
				id: 3,
				task: "Позвонить родителям",
				completed: false,
				priority: "medium",
				category: "семья",
			},
			{
				id: 4,
				task: "Подготовить отчет по работе",
				completed: true,
				priority: "high",
				category: "работа",
			},
			{
				id: 5,
				task: "Запланировать отпуск",
				completed: false,
				priority: "low",
				category: "отдых",
			},
			{
				id: 6,
				task: "Починить кран на кухне",
				completed: false,
				priority: "medium",
				category: "дом",
			},
			{
				id: 7,
				task: "Выучить 10 новых английских слов",
				completed: false,
				priority: "medium",
				category: "обучение",
			},
			{
				id: 8,
				task: "Сходить в спортзал",
				completed: true,
				priority: "high",
				category: "здоровье",
			},
		],
	},
	{
		id: 1,
		userName: "ALex",
		postsIds: [6, 7, 8, 9, 10],
		albumsIds: [4, 5, 6],
		toDoList: [
			{
				id: 0,
				task: "Выпить стакан воды утром",
				completed: false,
				priority: "high",
				category: "здоровье",
			},
			{
				id: 1,
				task: "Сделать утреннюю зарядку",
				completed: true,
				priority: "medium",
				category: "здоровье",
			},
			{
				id: 2,
				task: "Прочитать новости",
				completed: false,
				priority: "low",
				category: "образование",
			},
			{
				id: 3,
				task: "Составить план на день",
				completed: true,
				priority: "high",
				category: "продуктивность",
			},
			{
				id: 4,
				task: "Позвонить родителям",
				completed: false,
				priority: "medium",
				category: "семья",
			},
		],
	},
	{
		id: 2,
		userName: "Vlad",
		postsIds: [11, 12, 13, 14, 15],
		albumsIds: [7, 8, 9],
		toDoList: [
			{
				id: 0,
				task: "Приготовить здоровый завтрак",
				completed: true,
				priority: "medium",
				category: "питание",
			},
			{
				id: 1,
				task: "Записаться к врачу",
				completed: false,
				priority: "high",
				category: "здоровье",
			},
			{
				id: 2,
				task: "Изучить новый язык 30 минут",
				completed: false,
				priority: "medium",
				category: "образование",
			},
			{
				id: 3,
				task: "Сделать уборку в комнате",
				completed: true,
				priority: "low",
				category: "дом",
			},
			{
				id: 4,
				task: "Купить продукты",
				completed: false,
				priority: "high",
				category: "покупки",
			},
		],
	},
];
