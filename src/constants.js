// ACTIONS project
export const NEW_PROJECT = 'NEW_PROJECT';
export const LOAD_PROJECT = 'LOAD_PROJECT';
export const SAVE_PROJECT = 'SAVE_PROJECT';
export const OPEN_CATALOG = 'OPEN_CATALOG';
export const SELECT_TOOL_EDIT = 'SELECT_TOOL_EDIT';
export const UNSELECT_ALL = 'UNSELECT_ALL';
export const SET_PROPERTIES = 'SET_PROPERTIES';
export const SET_ITEMS_ATTRIBUTES = 'SET_ITEMS_ATTRIBUTES';
export const SET_LINES_ATTRIBUTES = 'SET_LINES_ATTRIBUTES';
export const SET_HOLES_ATTRIBUTES = 'SET_HOLES_ATTRIBUTES';
export const REMOVE = 'REMOVE';
export const UNDO = 'UNDO';
export const ROLLBACK = 'ROLLBACK';
export const SET_PROJECT_PROPERTIES = 'SET_PROJECT_PROPERTIES';
export const OPEN_PROJECT_CONFIGURATOR = 'OPEN_PROJECT_CONFIGURATOR';
export const INIT_CATALOG = 'INIT_CATALOG';
export const UPDATE_MOUSE_COORDS = 'UPDATE_MOUSE_COORDS';
export const UPDATE_ZOOM_SCALE = 'UPDATE_ZOOM_SCALE';
export const TOGGLE_SNAP = 'TOGGLE_SNAP';
export const CHANGE_CATALOG_PAGE = 'CHANGE_CATALOG_PAGE';
export const GO_BACK_TO_CATALOG_PAGE = 'GO_BACK_TO_CATALOG_PAGE';
export const THROW_ERROR = 'THROW_ERROR';
export const THROW_WARNING = 'THROW_WARNING';
export const COPY_PROPERTIES = 'COPY_PROPERTIES';
export const PASTE_PROPERTIES = 'PASTE_PROPERTIES';
export const PUSH_LAST_SELECTED_CATALOG_ELEMENT_TO_HISTORY = 'PUSH_LAST_SELECTED_CATALOG_ELEMENT_TO_HISTORY';
export const ALTERATE_STATE = 'ALTERATE_STATE';
export const SET_MODE = 'SET_MODE';
export const ADD_HORIZONTAL_GUIDE = 'ADD_HORIZONTAL_GUIDE';
export const ADD_VERTICAL_GUIDE = 'ADD_VERTICAL_GUIDE';
export const ADD_CIRCULAR_GUIDE = 'ADD_CIRCULAR_GUIDE';
export const REMOVE_HORIZONTAL_GUIDE = 'REMOVE_HORIZONTAL_GUIDE';
export const REMOVE_VERTICAL_GUIDE = 'REMOVE_VERTICAL_GUIDE';
export const REMOVE_CIRCULAR_GUIDE = 'REMOVE_CIRCULAR_GUIDE';

// ACTIONS viewer2D
export const SELECT_TOOL_ZOOM_IN = 'SELECT_TOOL_ZOOM_IN';
export const SELECT_TOOL_ZOOM_OUT = 'SELECT_TOOL_ZOOM_OUT';
export const SELECT_TOOL_PAN = 'SELECT_TOOL_PAN';
export const UPDATE_2D_CAMERA = 'UPDATE_2D_CAMERA';

//ACTIONS viewer3D
export const SELECT_TOOL_3D_VIEW = 'SELECT_TOOL_3D_VIEW';
export const SELECT_TOOL_3D_FIRST_PERSON = 'SELECT_TOOL_3D_FIRST_PERSON';

//ACTIONS items
export const SELECT_TOOL_DRAWING_ITEM = 'SELECT_TOOL_DRAWING_ITEM';
export const UPDATE_DRAWING_ITEM = 'UPDATE_DRAWING_ITEM';
export const END_DRAWING_ITEM = 'END_DRAWING_ITEM';
export const BEGIN_DRAGGING_ITEM = 'BEGIN_DRAGGING_ITEM';
export const UPDATE_DRAGGING_ITEM = 'UPDATE_DRAGGING_ITEM';
export const END_DRAGGING_ITEM = 'END_DRAGGING_ITEM';
export const BEGIN_ROTATING_ITEM = 'BEGIN_ROTATING_ITEM';
export const UPDATE_ROTATING_ITEM = 'UPDATE_ROTATING_ITEM';
export const END_ROTATING_ITEM = 'END_ROTATING_ITEM';

//ACTIONS groups
export const ADD_GROUP = 'ADD_GROUP';
export const ADD_GROUP_FROM_SELECTED = 'ADD_GROUP_FROM_SELECTED';
export const SELECT_GROUP = 'SELECT_GROUP';
export const UNSELECT_GROUP = 'UNSELECT_GROUP';
export const ADD_TO_GROUP = 'ADD_TO_GROUP';
export const REMOVE_FROM_GROUP = 'REMOVE_FROM_GROUP';
export const SET_GROUP_PROPERTIES = 'SET_GROUP_PROPERTIES';
export const SET_GROUP_ATTRIBUTES = 'SET_GROUP_ATTRIBUTES';
export const SET_GROUP_BARYCENTER = 'SET_GROUP_BARYCENTER';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const REMOVE_GROUP_AND_DELETE_ELEMENTS = 'REMOVE_GROUP_AND_DELETE_ELEMENTS';
export const GROUP_TRANSLATE = 'GROUP_TRANSLATE';
export const GROUP_ROTATE = 'GROUP_ROTATE';

//ACTION drawings
export const SELECT_HOLE = 'SELECT_HOLE';
export const SELECT_AREA = 'SELECT_AREA';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SELECT_LINE = 'SELECT_LINE';
export const SELECT_TOOL_DRAWING_LINE = 'SELECT_TOOL_DRAWING_LINE';
export const BEGIN_DRAWING_LINE = 'BEGIN_DRAWING_LINE';
export const UPDATE_DRAWING_LINE = 'UPDATE_DRAWING_LINE';
export const END_DRAWING_LINE = 'END_DRAWING_LINE';
export const SELECT_TOOL_DRAWING_HOLE = 'SELECT_TOOL_DRAWING_HOLE';
export const UPDATE_DRAWING_HOLE = 'UPDATE_DRAWING_HOLE'; //SHOULD BE SLPITTED IN BEGIN_DRAWING_HOLE AND UPDATE_DRAWING_HOLE
export const END_DRAWING_HOLE = 'END_DRAWING_HOLE';
export const BEGIN_DRAGGING_LINE = 'BEGIN_DRAGGING_LINE';
export const UPDATE_DRAGGING_LINE = 'UPDATE_DRAGGING_LINE';
export const END_DRAGGING_LINE = 'END_DRAGGING_LINE';
export const SELECT_TOOL_UPLOAD_IMAGE = 'SELECT_TOOL_UPLOAD_IMAGE';
export const BEGIN_UPLOADING_IMAGE = 'BEGIN_UPLOADING_IMAGE';
export const END_UPLOADING_IMAGE = 'END_UPLOADING_IMAGE';
export const BEGIN_FITTING_IMAGE = 'BEGIN_FITTING_IMAGE';
export const END_FITTING_IMAGE = 'END_FITTING_IMAGE';
export const BEGIN_DRAGGING_HOLE = 'BEGIN_DRAGGING_HOLE';
export const UPDATE_DRAGGING_HOLE = 'UPDATE_DRAGGING_HOLE';
export const END_DRAGGING_HOLE = 'END_DRAGGING_HOLE';

//ACTIONS vertices
export const BEGIN_DRAGGING_VERTEX = 'BEGIN_DRAGGING_VERTEX';
export const UPDATE_DRAGGING_VERTEX = 'UPDATE_DRAGGING_VERTEX';
export const END_DRAGGING_VERTEX = 'END_DRAGGING_VERTEX';

//ACTIONS scene
export const SET_LAYER_PROPERTIES = 'SET_LAYER_PROPERTIES';
export const ADD_LAYER = 'ADD_LAYER';
export const SELECT_LAYER = 'SELECT_LAYER';
export const REMOVE_LAYER = 'REMOVE_LAYER';

//GROUPING ACTIONS
export const PROJECT_ACTIONS = {
  NEW_PROJECT,
  LOAD_PROJECT,
  SAVE_PROJECT,
  OPEN_CATALOG,
  SELECT_TOOL_EDIT,
  UNSELECT_ALL,
  SET_PROPERTIES,
  SET_ITEMS_ATTRIBUTES,
  SET_LINES_ATTRIBUTES,
  SET_HOLES_ATTRIBUTES,
  REMOVE,
  UNDO,
  ROLLBACK,
  SET_PROJECT_PROPERTIES,
  OPEN_PROJECT_CONFIGURATOR,
  INIT_CATALOG,
  UPDATE_MOUSE_COORDS,
  UPDATE_ZOOM_SCALE,
  TOGGLE_SNAP,
  CHANGE_CATALOG_PAGE,
  GO_BACK_TO_CATALOG_PAGE,
  THROW_ERROR,
  THROW_WARNING,
  COPY_PROPERTIES,
  PASTE_PROPERTIES,
  PUSH_LAST_SELECTED_CATALOG_ELEMENT_TO_HISTORY,
  ALTERATE_STATE,
  SET_MODE,
  ADD_HORIZONTAL_GUIDE,
  ADD_VERTICAL_GUIDE,
  ADD_CIRCULAR_GUIDE,
  REMOVE_HORIZONTAL_GUIDE,
  REMOVE_VERTICAL_GUIDE,
  REMOVE_CIRCULAR_GUIDE
};

export const VIEWER2D_ACTIONS = {
  SELECT_TOOL_ZOOM_IN,
  SELECT_TOOL_ZOOM_OUT,
  SELECT_TOOL_PAN,
  UPDATE_2D_CAMERA
};

export const VIEWER3D_ACTIONS = {
  SELECT_TOOL_3D_VIEW,
  SELECT_TOOL_3D_FIRST_PERSON
};

export const ITEMS_ACTIONS = {
  SELECT_ITEM,
  SELECT_TOOL_DRAWING_ITEM,
  UPDATE_DRAWING_ITEM,
  END_DRAWING_ITEM,
  BEGIN_DRAGGING_ITEM,
  UPDATE_DRAGGING_ITEM,
  END_DRAGGING_ITEM,
  BEGIN_ROTATING_ITEM,
  UPDATE_ROTATING_ITEM,
  END_ROTATING_ITEM
};

export const HOLE_ACTIONS = {
  SELECT_HOLE,
  SELECT_TOOL_DRAWING_HOLE,
  UPDATE_DRAWING_HOLE,
  END_DRAWING_HOLE,
  BEGIN_DRAGGING_HOLE,
  UPDATE_DRAGGING_HOLE,
  END_DRAGGING_HOLE
};

export const LINE_ACTIONS = {
  SELECT_LINE,
  SELECT_TOOL_DRAWING_LINE,
  BEGIN_DRAWING_LINE,
  UPDATE_DRAWING_LINE,
  END_DRAWING_LINE,
  BEGIN_DRAGGING_LINE,
  UPDATE_DRAGGING_LINE,
  END_DRAGGING_LINE
};

export const AREA_ACTIONS = {
  SELECT_AREA
};

export const GROUP_ACTIONS = {
  ADD_GROUP,
  ADD_GROUP_FROM_SELECTED,
  SELECT_GROUP,
  UNSELECT_GROUP,
  ADD_TO_GROUP,
  REMOVE_FROM_GROUP,
  SET_GROUP_PROPERTIES,
  SET_GROUP_ATTRIBUTES,
  SET_GROUP_BARYCENTER,
  REMOVE_GROUP,
  REMOVE_GROUP_AND_DELETE_ELEMENTS,
  GROUP_TRANSLATE,
  GROUP_ROTATE
};

export const SCENE_ACTIONS = {
  ADD_LAYER,
  SET_LAYER_PROPERTIES,
  SELECT_LAYER,
  REMOVE_LAYER
};

export const VERTEX_ACTIONS = {
  BEGIN_DRAGGING_VERTEX,
  UPDATE_DRAGGING_VERTEX,
  END_DRAGGING_VERTEX
};

//MODES
export const MODE_IDLE = 'MODE_IDLE';
export const MODE_2D_ZOOM_IN = 'MODE_2D_ZOOM_IN';
export const MODE_2D_ZOOM_OUT = 'MODE_2D_ZOOM_OUT';
export const MODE_2D_PAN = 'MODE_2D_PAN';
export const MODE_3D_VIEW = 'MODE_3D_VIEW';
export const MODE_3D_FIRST_PERSON = 'MODE_3D_FIRST_PERSON';
export const MODE_WAITING_DRAWING_LINE = 'MODE_WAITING_DRAWING_LINE';
export const MODE_DRAGGING_LINE = 'MODE_DRAGGING_LINE';
export const MODE_DRAGGING_VERTEX = 'MODE_DRAGGING_VERTEX';
export const MODE_DRAGGING_ITEM = 'MODE_DRAGGING_ITEM';
export const MODE_DRAGGING_HOLE = 'MODE_DRAGGING_HOLE';
export const MODE_DRAWING_LINE = 'MODE_DRAWING_LINE';
export const MODE_DRAWING_HOLE = 'MODE_DRAWING_HOLE';
export const MODE_DRAWING_ITEM = 'MODE_DRAWING_ITEM';
export const MODE_ROTATING_ITEM = 'MODE_ROTATING_ITEM';
export const MODE_UPLOADING_IMAGE = 'MODE_UPLOADING_IMAGE';
export const MODE_FITTING_IMAGE = 'MODE_FITTING_IMAGE';
export const MODE_VIEWING_CATALOG = 'MODE_VIEWING_CATALOG';
export const MODE_CONFIGURING_PROJECT = 'MODE_CONFIGURING_PROJECT';

//Thinking about it...
//https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Proxy
/*
let MODE_DEF = [
  'IDLE',
  '2D_ZOOM_IN',
  '2D_ZOOM_OUT',
  '2D_PAN',
  '3D_VIEW',
  '3D_FIRST_PERSON',
  'WAITING_DRAWING_LINE',
  'DRAGGING_LINE',
  'DRAGGING_VERTEX',
  'DRAGGING_ITEM',
  'DRAGGING_HOLE',
  'DRAWING_LINE',
  'DRAWING_HOLE',
  'DRAWING_ITEM',
  'ROTATING_ITEM',
  'UPLOADING_IMAGE',
  'FITTING_IMAGE',
  'VIEWING_CATALOG',
  'CONFIGURING_PROJECT',
];

export const MODE = new Proxy( MODE_DEF, { get: (target, name) => { return target.indexOf(name) !== -1 ? name : null } } );
*/

export const MODE_SNAPPING = [
  MODE_IDLE, MODE_2D_ZOOM_IN, MODE_2D_ZOOM_OUT, MODE_2D_PAN,
  MODE_WAITING_DRAWING_LINE, MODE_DRAWING_LINE, MODE_DRAWING_HOLE,
  MODE_DRAWING_ITEM, MODE_DRAGGING_LINE, MODE_DRAGGING_VERTEX,
  MODE_DRAGGING_ITEM, MODE_DRAGGING_HOLE, MODE_FITTING_IMAGE,
  MODE_UPLOADING_IMAGE, MODE_ROTATING_ITEM
];

//UNITS
export const UNIT_MILLIMETER = 'mm';
export const UNIT_CENTIMETER = 'cm';
export const UNIT_METER = 'm';
export const UNIT_INCH = 'in';
export const UNIT_FOOT = 'ft';
export const UNIT_MILE = 'mi';

export const UNITS_LENGTH = [
  UNIT_MILLIMETER,
  UNIT_CENTIMETER,
  UNIT_METER,
  UNIT_INCH,
  UNIT_FOOT,
  UNIT_MILE
];

export const EPSILON = 1e-6;

export const KEYBOARD_BUTTON_CODE = {
  DELETE: 46,
  BACKSPACE: 8,
  ESC: 27,
  Z: 90,
  ALT: 18,
  C: 67,
  V: 86,
  CTRL: 17,
  ENTER: 13,
  TAB: 9
};