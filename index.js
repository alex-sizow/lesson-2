const a = [
	{
		id: 'specialist',
		name: 'Специалист',
		type: 'radio',
		value: [
			{ id: '', name: 'Все' },
			{ id: '1', name: 'Адвокат' },
			{ id: '2', name: 'Юрист' },
		],
		open: false,
	},
	{
		id: 'service',
		name: 'Услуга',
		type: 'radio',
		value: [
			{ id: '', name: 'Все услуги' },
			{
				id: '1',
				name: 'Консультация',
				value: [
					{ id: '123', name: 'Устная' },
					{ id: '321', name: 'Письменная' },
				],
			},
			{
				id: '2',
				name: 'Документы',
				value: [
					{
						id: '456',
						name: 'Гражданский процесс (Арбитражные суды) ',
					},
					{
						id: '654',
						name: 'Гражданский процесс (Суды общей юрисдикции)',
					},
				],
			},
			{ id: '3', name: 'Представительство в суде' },
		],
		open: true,
	},
	{
		id: 'experience',
		name: 'Стаж',
		type: 'radio',
		value: [
			{ id: '', name: 'Любой' },
			{ id: '1', name: 'Не менее 5 лет' },
			{ id: '2', name: 'Не менее 10 лет' },
			{ id: '3', name: 'Не менее 15 лет' },
		],
		open: false,
	},
];
