MAPDATA[48] = 
{
	name: 'Summer 2020 Event',
	date: '2020-06-26',
	diffMode: 2,
	allowDiffs: [4,1,2,3],
	allowFleets: [0,1,2,3],
	allowLBAS: true,
	allowVanguard: true,
	vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
	newResupplyCosts: true,
	allowStrongFF: true,
	bannerImg: 'assets/maps/48/banner1.png',
	bannerImgAlt: 'assets/maps/48/banner2.png',
	transportCalc: transportCalcStandard,
	friendFleet: {
		'E1-1': { ships: [
			{ mid: 695, LVL: 72, FP: 50, TP: 80, AA: 50, AR: 49, equips: [44,226,46] },
			{ mid: 324, LVL: 73, FP: 50, TP: 74, AA: 50, AR: 49, equips: [267,286,88] },
			{ mid: 325, LVL: 71, FP: 50, TP: 79, AA: 50, AR: 49, equips: [286,286,286] },
		] },
		'E1-2': { ships: [
			{ mid: 695, LVL: 72, FP: 50, TP: 80, AA: 50, AR: 49, equips: [287,227,47] },
			{ mid: 324, LVL: 73, FP: 50, TP: 74, AA: 50, AR: 49, equips: [287,227,47] },
			{ mid: 325, LVL: 71, FP: 50, TP: 77, AA: 50, AR: 49, equips: [267,286,88] },
			{ mid: 543, LVL: 77, FP: 69, TP: 89, AA: 64, AR: 53, equips: [286,286,286] },
		] },
		'E1-3': { ships: [
			{ mid: 383, LVL: 57, FP: 37, TP: 0, AA: 49, AR: 33, equips: [44,226,46] },
			{ mid: 685, LVL: 52, FP: 35, TP: 0, AA: 50, AR: 34, equips: [44,226,46] },
			{ mid: 376, LVL: 55, FP: 35, TP: 0, AA: 47, AR: 33, equips: [1,1,226] },
			{ mid: 377, LVL: 55, FP: 36, TP: 0, AA: 47, AR: 33, equips: [1,1,226] },
		] },
		'E1-4': { ships: [
			{ mid: 383, LVL: 57, FP: 37, TP: 0, AA: 53, AR: 33, equips: [44,226,46] },
			{ mid: 685, LVL: 52, FP: 32, TP: 0, AA: 48, AR: 34, equips: [44,226,46] },
			{ mid: 376, LVL: 55, FP: 34, TP: 0, AA: 46, AR: 32, equips: [44,226,46] },
			{ mid: 377, LVL: 55, FP: 35, TP: 0, AA: 44, AR: 33, equips: [1,1,226] },
			{ mid: 378, LVL: 54, FP: 35, TP: 0, AA: 49, AR: 33, equips: [1,1,1] },
		] },
		'E1-5': { ships: [
			{ mid: 285, LVL: 82, FP: 29, TP: 0, AA: 39, AR: 49, equips: [338,345,259] },
			{ mid: 192, LVL: 81, FP: 80, TP: 84, AA: 83, AR: 78, equips: [90,90,74,101] },
			{ mid: 547, LVL: 80, FP: 60, TP: 89, AA: 83, AR: 69, equips: [287,227,268] },
			{ mid: 464, LVL: 77, FP: 59, TP: 86, AA: 70, AR: 52, equips: [45,226,47] },
			{ mid: 567, LVL: 76, FP: 65, TP: 88, AA: 64, AR: 54, equips: [286,286,286] },
		] },
		'E1-6': { ships: [
			{ mid: 306, LVL: 80, FP: 68, TP: 79, AA: 72, AR: 69, equips: [287,227,149] },
			{ mid: 193, LVL: 82, FP: 82, TP: 84, AA: 74, AR: 79, equips: [90,90,74,101] },
			{ mid: 686, LVL: 72, FP: 50, TP: 79, AA: 56, AR: 46, equips: [287,227,47] },
			{ mid: 569, LVL: 79, FP: 65, TP: 87, AA: 71, AR: 53, equips: [267,286,88] },
			{ mid: 543, LVL: 77, FP: 69, TP: 89, AA: 64, AR: 53, equips: [286,286,286] },
		] },
		'E1-7': { ships: [
			{ mid: 497, LVL: 79, FP: 69, TP: 85, AA: 71, AR: 50, equips: [288,227,149] },
			{ mid: 246, LVL: 74, FP: 49, TP: 79, AA: 49, AR: 49, equips: [287,227,74] },
			{ mid: 323, LVL: 75, FP: 49, TP: 76, AA: 49, AR: 49, equips: [266,286,88] },
			{ mid: 145, LVL: 79, FP: 60, TP: 86, AA: 72, AR: 52, equips: [286,286,286] },
		] },
	},
	maps: {
		1: {
			name: 'E-1',
			nameT: 'Requiem, for Convoy Ki-504',
			fleetTypes: [0],
			bgmMap: 154,
			bgmDN: 155,
			bgmNN: 155,
			bgmDB: 156,
			bgmNB: 156,
			bossnode: [13,20],
			checkLock: ['48-2','48-3','48-4','48-5','48-6','48-7','48-8','48-9'],
			giveLock: '48-1',
			lbas: 0,
			reward: { ships: [700], firstOnly: true },
			parts: {
				1: {
					currentBoss: 'M',
					transport: 'L',
					maphp: {
						3: { 1: 750 },
						2: { 1: 600 },
						1: { 1: 400 },
						4: { 1: 400 },
					},
					finalhp: null,
				},
				2: {
					currentBoss: 'T',
					transport: null,
					maphp: {
						3: { 1: 3000 },
						2: { 1: 2400 },
						1: { 1: 1800 },
						4: { 1: 1800 },
					},
					finalhp: {
						3: 590,
						2: 480,
						1: 330,
						4: 330,
					},
				}
			},
			hiddenRoutes: {
				1: {
					images: [{ name: '1_1.png', x: 0, y: 0 }],
					unlock: function(debuff) {
						if (CHDATA.event.maps[1].diff == 3) return CHDATA.event.maps[1].part >= 2 && debuff && debuff.F;
						return CHDATA.event.maps[1].part >= 2;
					}
				},
			},
			historical: {
				'1': [63,64,101,100,114],
				'2': [49,18],
				'3': [15,16,631]
			},
			additionalChecks: function(ships,errors) {
				if (ships.BB + ships.FBB + ships.BBV) errors.push('No (F)BB(V)');
				if (ships.CV + ships.CVB + ships.CVL) errors.push('No CV(L/B)');

				for (let ship of ships.ids) {
					let mid = getBaseId(ship);
					if (mid == 161) errors.push('No Akitsumaru');
				}
			},
			startCheck: function() {
				let bonusTypes = {
					'1': 1.15,
					'2': 1.265,
					'3': 1.375,
				};

				for (let ship of FLEETS1[0].ships) {
											
					let mid = getBaseId(ship.mid);
					let hist = false;

					for (let type in bonusTypes) {
						if (MAPDATA[48].maps[1].historical[type].indexOf(mid) != -1) {
							ship.bonusSpecial = [{mod:bonusTypes[type]}];
							hist = true;
							break;
						}
					}

					if (hist == false) {

						if (ship.type == 'DD') {
							ship.bonusSpecial = [{mod:1.1}];
						}

						if (ship.type == 'DE') {
							ship.bonusSpecial = [{mod:1.35}];
						}
					}
				}

				return 'Start';
			},
			nodes: {
				'Start': {
					type: 3,
					x: 92,
					y: 209,
					route: 'A'
				},					
				'A': {
					type: 3,
					x: 108,
					y: 151,
					route: 'B'
				},
				'B': {
					type: 3,
					x: 145,
					y: 127,
					route: 'C'
				},
				'C': {
					type: 3,
					x: 209,
					y: 180,
					routeS: ['E','D']
				},
				'D': {
					type: 1,
					x: 268,
					y: 229,
					subonly: true,
					compDiff: {
						3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':20,'Hard 5':15,'Hard 6':15},
						2: {'Medium 1':20,'Medium 2':20,'Medium 3':15,'Medium 4':15,'Medium 5':15,'Medium 6':15},
						1: {'Easy 1':15,'Easy 2':15,'Easy 3':15,'Easy 4':15,'Easy 5':20,'Easy 6':20},
						4: {'Casual 1':25,'Casual 2':25, 'Casual 3':25,'Casual 4':25},
					},
					route: 'G'
				},
				'E': {
					type: 3,
					x: 281,
					y: 156,
					route: 'F'
				},
				'F': {
					type: 1,
					x: 331,
					y: 139,
					subonly: true,
					compDiff: {
						3: {'Hard 1':15,'Hard 2':15,'Hard 3':11,'Hard 4':11,'Hard 5':24,'Hard 6':24},
						2: {'Medium 1':15,'Medium 2':15,'Medium 3':11,'Medium 4':11,'Medium 5':24,'Medium 6':24},
						1: {'Easy 1':15,'Easy 2':15,'Easy 3':11,'Easy 4':11,'Easy 5':24,'Easy 6':24},
						4: {'Casual 1':30,'Casual 2':30, 'Casual 3':20,'Casual 4':20},
					},
					routeC: (ships) => {
						if ([2,3].includes(CHDATA.event.maps[1].diff) && (ships.CA || ships.CAV)) return 'O'; 
						if ((ships.CA + ships.CAV) > 2) return 'O';
						if (CHDATA.event.maps[1].diff == 3 && ships.CL > 1) return 'O';
						if (ships.DD + ships.DE < 3) return 'O';
						if (CHDATA.event.maps[1].diff == 3 && ships.total == 6 && ships.DE < 2) return 'O';

						return 'N';
					},
					debuffGive: function() {
						if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[1].debuff.F = 1;
					},
					get end () {
						return CHDATA.event.maps[1].routes.indexOf(1) == -1;
					}
				},
				'G': {
					type: 1,
					x: 391,
					y: 211,
					subonly: true,
					compDiff: {
						3: {'Hard 1':15,'Hard 2':15,'Hard 3':11,'Hard 4':11,'Hard 5':24,'Hard 6':24},
						2: {'Medium 1':15,'Medium 2':15,'Medium 3':11,'Medium 4':11,'Medium 5':24,'Medium 6':24},
						1: {'Easy 1':15,'Easy 2':15,'Easy 3':11,'Easy 4':11,'Easy 5':24,'Easy 6':24},
						4: {'Casual 1':30,'Casual 2':30, 'Casual 3':20,'Casual 4':20},
					},
					routeC: function(ships) {
						if (CHDATA.event.maps[1].diff == 3 && ships.total > 5) return 'H';
						if (ships.CL > 1) return 'H';
						if (ships.DD < 3 && (ships.DD + ships.DE) < 4) return 'H';
						if (ships.CA || ships.CAV) return 'H';

						return 'J';
					}
				},
				'H': {
					type: 1,
					x: 438,
					y: 152,
					compDiff: {
						3: {'Hard 1':20,'Hard 2':10,'Hard 3':20,'Hard 4':15,'Hard 5':20,'Hard 6':15},
						2: {'Medium 1':20,'Medium 2':10,'Medium 3':20,'Medium 4':15,'Medium 5':20,'Medium 6':15},
						1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':15,'Easy 5':20,'Easy 6':15},
						4: {'Casual 1':40,'Casual 2':30, 'Casual 3':20,'Casual 4':10},
					},
					routeC: function(ships) {
						// --- Fast+
						if (ships.speed >= 15) return 'K';

						if (ships.CL) return 'I';
						if (ships.CA || ships.CAV) return 'I';
						if (ships.DD < 4) return 'I';
						if (ships.DE < 1) return 'I';

						return 'K';
					}
				},
				'I': {
					type: 1,
					x: 488,
					y: 87,
					subonly: true,
					compDiff: {
						3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':20,'Hard 5':15,'Hard 6':15},
						2: {'Medium 1':10,'Medium 2':15,'Medium 3':10,'Medium 4':5,'Medium 5':20,'Medium 6':20,'Medium 7':15,'Medium 8':5},
						1: {'Easy 1':15,'Easy 2':15,'Easy 3':15,'Easy 4':15,'Easy 5':20,'Easy 6':20},
						4: {'Casual 1':25,'Casual 2':25, 'Casual 3':25,'Casual 4':25},
					},
					route: 'K'
				},
				'J': {
					type: 1,
					x: 533,
					y: 183,
					compDiff: {
						3: {'Hard 1':20,'Hard 2':10,'Hard 3':20,'Hard 4':15,'Hard 5':20,'Hard 6':15},
						2: {'Medium 1':20,'Medium 2':10,'Medium 3':20,'Medium 4':15,'Medium 5':20,'Medium 6':15},
						1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':15,'Easy 5':20,'Easy 6':15},
						4: {'Casual 1':35,'Casual 2':30, 'Casual 3':20,'Casual 4':15},
					},
					route: 'K'
				},
				'K': {
					type: 3,
					x: 581,
					y: 148,
					route: 'L'
				},
				'L': {
					type: 2,
					resource: 0,
					x: 656,
					y: 144,
					route: 'M'
				},
				'M': {
					type: 1,
					x: 630,
					y: 92,
					boss: true,
					end: true,
					subonly: true,
					setupSpecial: function() {
						let bonusTypes = {
							'1': 1.265,
							'2': 1.391,
							'3': 1.581,
						};

						for (let ship of FLEETS1[0].ships) {
							let mid = getBaseId(ship.mid);
	
							for (let type in bonusTypes) {
								if (MAPDATA[48].maps[1].historical[type].indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:bonusTypes[type]}];
									hist = true;
									break;
								}
							}
						}
					},
					compDiff: {
						3: {'Hard 1':10,'Hard 2':20,'Hard 3':15,'Hard 4':20,'Hard 5':15,'Hard 6':20},
						2: {'Medium 1':25,'Medium 2':25,'Medium 3':30,'Medium 4':20},
						1: {'Easy 1':10,'Easy 2':20,'Easy 3':30,'Easy 4':20,'Easy 5':20},
						4: {'Casual 1':10,'Casual 2':30, 'Casual 3':30,'Casual 4':30},
					},
					compDiffF: {
						3: {'Hard 6':100},
						2: {'Medium 4':100},
						1: {'Easy 5':100},
						4: {'Casual 4':100},
					},
				},
				'N': {
					type: 1,
					x: 364,
					y: 113,
					compDiff: {
						3: {'Hard 1':20,'Hard 2':15,'Hard 3':50,'Hard 4':15},
						2: {'Medium 1':15,'Medium 2':10,'Medium 3':15,'Medium 4':10,'Medium 5':35,'Medium 6':15},
						1: {'Easy 1':15,'Easy 2':20,'Easy 3':20,'Easy 4':10,'Easy 5':25,'Easy 6':10},
						4: {'Casual 1':35,'Casual 2':30, 'Casual 3':20,'Casual 4':15},
					},
					showLoSPlane: 'T',
					routeC: function(ships) {							
						return checkELoS33(getELoS33(1,3), { 43: 'P', 51: 'T' });
					}
				},
				'O': {
					type: 3,
					x: 386,
					y: 309,
					route: 'R'
				},
				'P': {
					type: 3,
					x: 403,
					y: 76,
					end: true,
				},
				'Q': {
					type: 1,
					x: 442,
					y: 226,
					compDiff: {
						3: {'Hard 1':20,'Hard 2':15,'Hard 3':50,'Hard 4':15},
						2: {'Medium 1':15,'Medium 2':10,'Medium 3':15,'Medium 4':10,'Medium 5':35,'Medium 6':15},
						1: {'Easy 1':15,'Easy 2':20,'Easy 3':20,'Easy 4':10,'Easy 5':25,'Easy 6':10},
						4: {'Casual 1':35,'Casual 2':30, 'Casual 3':20,'Casual 4':15},
					},
					route: 'T'
				},
				'R': {
					type: 1,
					x: 479,
					y: 304,
					subonly: true,
					compDiff: {
						3: {'Hard 1':15,'Hard 2':15,'Hard 3':11,'Hard 4':11,'Hard 5':24,'Hard 6':24},
						2: {'Medium 1':15,'Medium 2':15,'Medium 3':11,'Medium 4':11,'Medium 5':24,'Medium 6':24},
						1: {'Easy 1':15,'Easy 2':15,'Easy 3':11,'Easy 4':11,'Easy 5':24,'Easy 6':24},
						4: {'Casual 1':30,'Casual 2':30, 'Casual 3':20,'Casual 4':20},
					},
					showLoSPlane: 'Q',
					routeC: function(ships) {							
						return checkELoS33(getELoS33(1,3), { 39: 'S', 46: 'Q' });
					}
				},
				'S': {
					type: 3,
					x: 580,
					y: 299,
					end: true,
				},
				'T': {
					type: 1,
					x: 380,
					y: 163,
					boss: true,
					end: true,
					friendFleet: ['E1-1','E1-3','E1-4'],
					friendFleetS: ['E1-1','E1-2','E1-3','E1-4','E1-5','E1-6','E1-7'],
					setupSpecial: function() {
						let bonusTypes = {
							'1': 1.265,
							'2': 1.391,
							'3': 1.581,
						};

						for (let ship of MAPDATA[48].utils.getCurrentShips()) {
							let mid = getBaseId(ship.mid);
	
							for (let type in bonusTypes) {
								if (MAPDATA[48].maps[1].historical[type].indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:bonusTypes[type]}];
									hist = true;
									break;
								}
							}
						}
					},
					compDiff: {
						3: {'Hard 1':	50,	'Hard 2':	50},
						2: {'Medium 1':	50,	'Medium 2':	50},
						1: {'Easy 1':	50,	'Easy 2':	50},
						4: {'Casual 1':	50,	'Casual 2':	50},
					},
					compDiffF: {
						3: {'Hard 3':	100},
						2: {'Medium 3':	100},
						1: {'Easy 3':	100},
						4: {'Casual 3':	100},
					},
				},
			}
		},
	}
};


MAPDATA[48].utils = {
	getCurrentShips: function () {
		let ships = FLEETS1[0].ships;
		if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
		if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships);

		return ships;
	},
}