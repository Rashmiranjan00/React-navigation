defaultStore = {
  name: 'Rashmiranjan Pradhan',
  addr: 'L-188, Nandan Vihar',
  loc: 'Bbsr',
  prof: 'Developer',
  workex: 'LN employee',
};

export default (store = defaultStore, action) => {
    switch(action.type) {
        case 'USER':
            return store
            break;
        default:
            return defaultStore;
    }
};
