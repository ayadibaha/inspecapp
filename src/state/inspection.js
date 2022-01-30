import { createStore, action } from 'easy-peasy';

/**
 * Inspection Type
 * {
 *  zone: '',
 *  imageUrl: '',
 *  comment: '',
 *  priority: 1, # Can be [1, 2, 3]
 *  inCharge: 'Maintenance', # Can be ['Maintenance', 'Hygiène', 'Responsable de la zone']
 * }
 */

export default createStore({
    type: 'infraFoodDefense',
    firstInspector: '',
    secondInspector: '',
    inspectionDate: new Date(),
    weekNumber: 0,
    station: 'Guipavas',
    inspections: [
        // Inspection Type
    ],
    updateState: action((state, payload) => {
        const { key, value } = payload;
        state[key] = value;
    }),
    addInspection: action((state, payload) => {
        state.inspections.push(payload);
    }),
    reset: action((state) => {
        state.type = 'infraFoodDefense';
        state.firstInspector = '';
        state.secondInspector = '';
        state.inspectionDate = new Date();
        state.weekNumber = 0;
        state.station = 'Guipavas';
        state.inspections = [];

    })
});