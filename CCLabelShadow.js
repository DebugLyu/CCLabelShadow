/**
 * @class LabelShadow
 * 文字阴影
 * @extends Component
 * @example
 *  // Create a new node and add label components.
 *  var node = new cc.Node("New Label");
 *  var label = node.addComponent(cc.Label);
 *  var outline = node.addComponent(cc.LabelShadow);
 *  node.parent = this.node;
 */

var LabelShadow = cc.Class({
    name: 'cc.LabelShadow', extends: require('./CCComponent'),
    editor: CC_EDITOR && {
        menu: 'i18n:MAIN_MENU.component.renderers/LabelShadow',
        executeInEditMode: true,
        requireComponent: cc.Label,
    },

    ctor: function () {
        this._labelSGNode = null;
    },

    properties: {
        /**
         * !#en Change the shadow color
         * !#zh 改变阴影的颜色
         * @property color
         * @type {Color}
         */
        _color: cc.color(255, 255, 255, 255),
        /**
         * !#en Change the shadow offset
         * !#zh 改变阴影的偏移量
         * @property color
         * @type {Color}
         */
        _offx: 0,
        _offy: 0,
        /**
         * !#en Change the shadow blur
         * !#zh 改变阴影的模糊范围
         * @property color
         * @type {Color}
         */
        _blur: 2,

        color: {
            get: function () {
                return this._color;
            },
            set: function (value) {
                this._color = cc.color(value);
                this._setShadow(this._labelSGNode);
            }
        },
        offsetX: {
            get: function () {
                return this._offx;
            },
            set: function (value) {
                this._offx = value;
                this._setShadow(this._labelSGNode);
            }
        },

        offsetY: {
            get: function () {
                return this._offy;
            },
            set: function (value) {
                this._offy = value;
                this._setShadow(this._labelSGNode);
            }
        },

        blur: {
            get: function () {
                return this._blur;
            },
            set: function (value) {
                this._blur = value;
                this._setShadow(this._labelSGNode);
            }
        }
    },

    onEnable: function () {
        var label = this.node.getComponent('cc.Label');
        var sgNode = this._labelSGNode = label && label._sgNode;
        (!CC_JSB && sgNode) ? sgNode.setShadowEnabled(true) : null;
        this._setShadow(this._labelSGNode);
    },

    onDisable: function () {
        if (this._labelSGNode) {
            !CC_JSB ? this._labelSGNode.setShadowEnabled(false) : null;
        }
        this._labelSGNode = null;
    },

    _setShadow: function (sgNode) {
        if (sgNode == null) { return; }
        if (CC_JSB) {
            sgNode.setEnableShadow(this._color, { x: this._offx, y: this._offy });
        } else {
            sgNode.setShadowOffset(this._offx, -this._offy);
            sgNode.setShadowColor(cc.color(this._color));
            sgNode.setShadowBlur(this._blur);
        }
    }
});

cc.LabelShadow = module.exports = LabelShadow;