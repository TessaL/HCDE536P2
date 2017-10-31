require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ViewController":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (function(superClass) {
  extend(exports, superClass);

  function exports(options) {
    var autoInitial, backButtons, btn, i, len, transitions;
    if (options == null) {
      options = {};
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.height == null) {
      options.height = Screen.height;
    }
    if (options.clip == null) {
      options.clip = true;
    }
    if (options.initialViewName == null) {
      options.initialViewName = 'initialView';
    }
    if (options.backButtonName == null) {
      options.backButtonName = 'backButton';
    }
    if (options.animationOptions == null) {
      options.animationOptions = {
        curve: "cubic-bezier(0.19, 1, 0.22, 1)",
        time: .7
      };
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = "black";
    }
    if (options.scroll == null) {
      options.scroll = false;
    }
    if (options.autoLink == null) {
      options.autoLink = true;
    }
    exports.__super__.constructor.call(this, options);
    this.history = [];
    this.onChange("subLayers", (function(_this) {
      return function(changeList) {
        var c, children, i, len, scrollComponent, view;
        view = changeList.added[0];
        if (view != null) {
          view.clip = true;
          view.on(Events.Click, function() {});
          if (_this.scroll) {
            children = view.children;
            scrollComponent = new ScrollComponent({
              name: "scrollComponent",
              width: _this.width,
              height: _this.height,
              parent: view
            });
            scrollComponent.content.backgroundColor = "";
            if (view.width <= _this.width) {
              scrollComponent.scrollHorizontal = false;
            }
            if (view.height <= _this.height) {
              scrollComponent.scrollVertical = false;
            }
            for (i = 0, len = children.length; i < len; i++) {
              c = children[i];
              c.parent = scrollComponent.content;
            }
            view.scrollComponent = scrollComponent;
            return view.size = {
              width: _this.width,
              height: _this.height
            };
          }
        }
      };
    })(this));
    transitions = {
      switchInstant: {},
      fadeIn: {
        newView: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      zoomIn: {
        newView: {
          from: {
            scale: 0.8,
            opacity: 0
          },
          to: {
            scale: 1,
            opacity: 1
          }
        }
      },
      zoomOut: {
        oldView: {
          to: {
            scale: 0.8,
            opacity: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideInUp: {
        newView: {
          from: {
            y: this.height
          },
          to: {
            y: 0
          }
        }
      },
      slideInRight: {
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      slideInDown: {
        newView: {
          from: {
            maxY: 0
          },
          to: {
            y: 0
          }
        }
      },
      slideInLeft: {
        newView: {
          from: {
            maxX: 0
          },
          to: {
            maxX: this.width
          }
        }
      },
      moveInUp: {
        oldView: {
          to: {
            y: -this.height
          }
        },
        newView: {
          from: {
            y: this.height
          },
          to: {
            y: 0
          }
        }
      },
      moveInRight: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      moveInDown: {
        oldView: {
          to: {
            y: this.height
          }
        },
        newView: {
          from: {
            y: -this.height
          },
          to: {
            y: 0
          }
        }
      },
      moveInLeft: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            maxX: 0
          },
          to: {
            x: 0
          }
        }
      },
      pushInRight: {
        oldView: {
          to: {
            x: -(this.width / 5),
            brightness: 70
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushInLeft: {
        oldView: {
          to: {
            x: this.width / 5,
            brightness: 70
          }
        },
        newView: {
          from: {
            x: -this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            x: -(this.width / 5),
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      pushOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width / 5,
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      slideOutUp: {
        oldView: {
          to: {
            maxY: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutDown: {
        oldView: {
          to: {
            y: this.height
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          to: {}
        }
      }
    };
    transitions.slideIn = transitions.slideInRight;
    transitions.slideOut = transitions.slideOutRight;
    transitions.pushIn = transitions.pushInRight;
    transitions.pushOut = transitions.pushOutRight;
    Events.ViewWillSwitch = "viewWillSwitch";
    Events.ViewDidSwitch = "viewDidSwitch";
    Layer.prototype.onViewWillSwitch = function(cb) {
      return this.on(Events.ViewWillSwitch, cb);
    };
    Layer.prototype.onViewDidSwitch = function(cb) {
      return this.on(Events.ViewDidSwitch, cb);
    };
    _.each(transitions, (function(_this) {
      return function(animProps, name) {
        var btn, i, layers, len, viewController;
        if (options.autoLink) {
          layers = Framer.CurrentContext._layers;
          for (i = 0, len = layers.length; i < len; i++) {
            btn = layers[i];
            if (_.includes(btn.name, name)) {
              viewController = _this;
              btn.onClick(function() {
                var anim, linkName;
                anim = this.name.split('_')[0];
                linkName = this.name.replace(anim + '_', '');
                linkName = linkName.replace(/\d+/g, '');
                return viewController[anim](_.find(layers, function(l) {
                  return l.name === linkName;
                }));
              });
            }
          }
        }
        return _this[name] = function(newView, animationOptions) {
          var animObj, hook, incoming, outgoing, ref, ref1, ref2, ref3, ref4, ref5, ref6;
          if (animationOptions == null) {
            animationOptions = _this.animationOptions;
          }
          if (newView === _this.currentView) {
            return;
          }
          newView.parent = _this;
          newView.sendToBack();
          newView.point = {
            x: 0,
            y: 0
          };
          newView.opacity = 1;
          newView.scale = 1;
          newView.brightness = 100;
          if ((ref = _this.currentView) != null) {
            ref.point = {
              x: 0,
              y: 0
            };
          }
          if ((ref1 = _this.currentView) != null) {
            ref1.props = (ref2 = animProps.oldView) != null ? ref2.from : void 0;
          }
          animObj = _.extend({
            properties: (ref3 = animProps.oldView) != null ? ref3.to : void 0
          }, animationOptions);
          _.defaults(animObj, {
            properties: {}
          });
          outgoing = (ref4 = _this.currentView) != null ? ref4.animate(animObj) : void 0;
          newView.props = (ref5 = animProps.newView) != null ? ref5.from : void 0;
          incoming = newView.animate(_.extend({
            properties: (ref6 = animProps.newView) != null ? ref6.to : void 0
          }, animationOptions));
          if (_.includes(name, 'Out')) {
            newView.placeBehind(_this.currentView);
            outgoing.on(Events.AnimationEnd, function() {
              return _this.currentView.bringToFront();
            });
          } else {
            newView.placeBefore(_this.currentView);
          }
          _this.emit(Events.ViewWillSwitch, _this.currentView, newView);
          _this.saveCurrentViewToHistory(name, outgoing, incoming);
          _this.currentView = newView;
          _this.emit("change:previousView", _this.previousView);
          _this.emit("change:currentView", _this.currentView);
          if (incoming.isAnimating) {
            hook = incoming;
          } else {
            hook = outgoing;
          }
          return hook != null ? hook.on(Events.AnimationEnd, function() {
            return _this.emit(Events.ViewDidSwitch, _this.previousView, _this.currentView);
          }) : void 0;
        };
      };
    })(this));
    if (options.initialViewName != null) {
      autoInitial = _.find(Framer.CurrentContext._layers, function(l) {
        return l.name === options.initialViewName;
      });
      if (autoInitial != null) {
        this.switchInstant(autoInitial);
      }
    }
    if (options.initialView != null) {
      this.switchInstant(options.initialView);
    }
    if (options.backButtonName != null) {
      backButtons = _.filter(Framer.CurrentContext._layers, function(l) {
        return _.includes(l.name, options.backButtonName);
      });
      for (i = 0, len = backButtons.length; i < len; i++) {
        btn = backButtons[i];
        btn.onClick((function(_this) {
          return function() {
            return _this.back();
          };
        })(this));
      }
    }
  }

  exports.define("previousView", {
    get: function() {
      return this.history[0].view;
    }
  });

  exports.prototype.saveCurrentViewToHistory = function(name, outgoingAnimation, incomingAnimation) {
    return this.history.unshift({
      view: this.currentView,
      animationName: name,
      incomingAnimation: incomingAnimation,
      outgoingAnimation: outgoingAnimation
    });
  };

  exports.prototype.back = function() {
    var backIn, moveOut, previous;
    previous = this.history[0];
    if (previous.view != null) {
      if (_.includes(previous.animationName, 'Out')) {
        previous.view.bringToFront();
      }
      backIn = previous.outgoingAnimation.reverse();
      moveOut = previous.incomingAnimation.reverse();
      backIn.start();
      moveOut.start();
      this.currentView = previous.view;
      this.history.shift();
      return moveOut.on(Events.AnimationEnd, (function(_this) {
        return function() {
          return _this.currentView.bringToFront();
        };
      })(this));
    }
  };

  return exports;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9oY2RlNTM2LXAyLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9oY2RlNTM2LXAyLmZyYW1lci9tb2R1bGVzL1ZpZXdDb250cm9sbGVyLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsImNsYXNzIG1vZHVsZS5leHBvcnRzIGV4dGVuZHMgTGF5ZXJcblx0XHRcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gU2NyZWVuLmhlaWdodFxuXHRcdG9wdGlvbnMuY2xpcCA/PSB0cnVlXG5cdFx0b3B0aW9ucy5pbml0aWFsVmlld05hbWUgPz0gJ2luaXRpYWxWaWV3J1xuXHRcdG9wdGlvbnMuYmFja0J1dHRvbk5hbWUgPz0gJ2JhY2tCdXR0b24nXG5cdFx0b3B0aW9ucy5hbmltYXRpb25PcHRpb25zID89IHsgY3VydmU6IFwiY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpXCIsIHRpbWU6IC43IH1cblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBcImJsYWNrXCJcblx0XHRvcHRpb25zLnNjcm9sbCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuYXV0b0xpbmsgPz0gdHJ1ZVxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEBoaXN0b3J5ID0gW11cblxuXHRcdEBvbkNoYW5nZSBcInN1YkxheWVyc1wiLCAoY2hhbmdlTGlzdCkgPT5cblx0XHRcdHZpZXcgPSBjaGFuZ2VMaXN0LmFkZGVkWzBdXG5cdFx0XHRpZiB2aWV3P1xuXHRcdFx0XHQjIGRlZmF1bHQgYmVoYXZpb3JzIGZvciB2aWV3c1xuXHRcdFx0XHR2aWV3LmNsaXAgPSB0cnVlXG5cdFx0XHRcdHZpZXcub24gRXZlbnRzLkNsaWNrLCAtPiByZXR1cm4gIyBwcmV2ZW50IGNsaWNrLXRocm91Z2gvYnViYmxpbmdcblx0XHRcdFx0IyBhZGQgc2Nyb2xsY29tcG9uZW50XG5cdFx0XHRcdGlmIEBzY3JvbGxcblx0XHRcdFx0XHRjaGlsZHJlbiA9IHZpZXcuY2hpbGRyZW5cblx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQgPSBuZXcgU2Nyb2xsQ29tcG9uZW50XG5cdFx0XHRcdFx0XHRuYW1lOiBcInNjcm9sbENvbXBvbmVudFwiXG5cdFx0XHRcdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IEBoZWlnaHRcblx0XHRcdFx0XHRcdHBhcmVudDogdmlld1xuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudC5jb250ZW50LmJhY2tncm91bmRDb2xvciA9IFwiXCJcblx0XHRcdFx0XHRpZiB2aWV3LndpZHRoIDw9IEB3aWR0aFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbEhvcml6b250YWwgPSBmYWxzZVxuXHRcdFx0XHRcdGlmIHZpZXcuaGVpZ2h0IDw9IEBoZWlnaHRcblx0XHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudC5zY3JvbGxWZXJ0aWNhbCA9IGZhbHNlXG5cdFx0XHRcdFx0Zm9yIGMgaW4gY2hpbGRyZW5cblx0XHRcdFx0XHRcdGMucGFyZW50ID0gc2Nyb2xsQ29tcG9uZW50LmNvbnRlbnRcblx0XHRcdFx0XHR2aWV3LnNjcm9sbENvbXBvbmVudCA9IHNjcm9sbENvbXBvbmVudCAjIG1ha2UgaXQgYWNjZXNzaWJsZSBhcyBhIHByb3BlcnR5XG5cdFx0XHRcdFx0IyByZXNldCBzaXplIHNpbmNlIGNvbnRlbnQgbW92ZWQgdG8gc2Nyb2xsQ29tcG9uZW50LiBwcmV2ZW50cyBzY3JvbGwgYnVnIHdoZW4gZHJhZ2dpbmcgb3V0c2lkZS5cblx0XHRcdFx0XHR2aWV3LnNpemUgPSB7d2lkdGg6IEB3aWR0aCwgaGVpZ2h0OiBAaGVpZ2h0fVxuXG5cdFx0dHJhbnNpdGlvbnMgPVxuXHRcdFx0c3dpdGNoSW5zdGFudDoge31cblx0XHRcdGZhZGVJbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7b3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge29wYWNpdHk6IDF9XG5cdFx0XHR6b29tSW46XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMSwgb3BhY2l0eTogMX1cblx0XHRcdHpvb21PdXQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMC44LCBvcGFjaXR5OiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVJblVwOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdHNsaWRlSW5SaWdodDpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHNsaWRlSW5Eb3duOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhZOiAwfVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdHNsaWRlSW5MZWZ0OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhYOiAwfVxuXHRcdFx0XHRcdHRvOiB7bWF4WDogQHdpZHRofVxuXHRcdFx0bW92ZUluVXA6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiAtQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eTogQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRtb3ZlSW5SaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRtb3ZlSW5Eb3duOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eTogLUBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0bW92ZUluTGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7bWF4WDogMH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoSW5SaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJbkxlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGgvNSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC1Ad2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaE91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiAtKEB3aWR0aC81KSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdFx0dG86IHt4OiAwLCBicmlnaHRuZXNzOiAxMDB9XG5cdFx0XHRwdXNoT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHNsaWRlT3V0VXA6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhZOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXRSaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0RG93bjpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IEBoZWlnaHR9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dExlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhYOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXG5cdFx0IyBzaG9ydGN1dHNcblx0XHR0cmFuc2l0aW9ucy5zbGlkZUluID0gdHJhbnNpdGlvbnMuc2xpZGVJblJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMuc2xpZGVPdXQgPSB0cmFuc2l0aW9ucy5zbGlkZU91dFJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMucHVzaEluID0gdHJhbnNpdGlvbnMucHVzaEluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoT3V0ID0gdHJhbnNpdGlvbnMucHVzaE91dFJpZ2h0XG5cblx0XHQjIGV2ZW50c1xuXHRcdEV2ZW50cy5WaWV3V2lsbFN3aXRjaCA9IFwidmlld1dpbGxTd2l0Y2hcIlxuXHRcdEV2ZW50cy5WaWV3RGlkU3dpdGNoID0gXCJ2aWV3RGlkU3dpdGNoXCJcblx0XHRMYXllcjo6b25WaWV3V2lsbFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3V2lsbFN3aXRjaCwgY2IpXG5cdFx0TGF5ZXI6Om9uVmlld0RpZFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBjYilcdFx0XG5cblx0XHRfLmVhY2ggdHJhbnNpdGlvbnMsIChhbmltUHJvcHMsIG5hbWUpID0+XG5cblx0XHRcdGlmIG9wdGlvbnMuYXV0b0xpbmtcblx0XHRcdFx0bGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnNcblx0XHRcdFx0Zm9yIGJ0biBpbiBsYXllcnNcblx0XHRcdFx0XHRpZiBfLmluY2x1ZGVzIGJ0bi5uYW1lLCBuYW1lXG5cdFx0XHRcdFx0XHR2aWV3Q29udHJvbGxlciA9IEBcblx0XHRcdFx0XHRcdGJ0bi5vbkNsaWNrIC0+XG5cdFx0XHRcdFx0XHRcdGFuaW0gPSBAbmFtZS5zcGxpdCgnXycpWzBdXG5cdFx0XHRcdFx0XHRcdGxpbmtOYW1lID0gQG5hbWUucmVwbGFjZShhbmltKydfJywnJylcblx0XHRcdFx0XHRcdFx0bGlua05hbWUgPSBsaW5rTmFtZS5yZXBsYWNlKC9cXGQrL2csICcnKSAjIHJlbW92ZSBudW1iZXJzXG5cdFx0XHRcdFx0XHRcdHZpZXdDb250cm9sbGVyW2FuaW1dIF8uZmluZChsYXllcnMsIChsKSAtPiBsLm5hbWUgaXMgbGlua05hbWUpXG5cblx0XHRcdEBbbmFtZV0gPSAobmV3VmlldywgYW5pbWF0aW9uT3B0aW9ucyA9IEBhbmltYXRpb25PcHRpb25zKSA9PlxuXG5cdFx0XHRcdHJldHVybiBpZiBuZXdWaWV3IGlzIEBjdXJyZW50Vmlld1xuXG5cblxuXHRcdFx0XHQjIG1ha2Ugc3VyZSB0aGUgbmV3IGxheWVyIGlzIGluc2lkZSB0aGUgdmlld2NvbnRyb2xsZXJcblx0XHRcdFx0bmV3Vmlldy5wYXJlbnQgPSBAXG5cdFx0XHRcdG5ld1ZpZXcuc2VuZFRvQmFjaygpXG5cblx0XHRcdFx0IyByZXNldCBwcm9wcyBpbiBjYXNlIHRoZXkgd2VyZSBjaGFuZ2VkIGJ5IGEgcHJldiBhbmltYXRpb25cblx0XHRcdFx0bmV3Vmlldy5wb2ludCA9IHt4OjAsIHk6IDB9XG5cdFx0XHRcdG5ld1ZpZXcub3BhY2l0eSA9IDFcblx0XHRcdFx0bmV3Vmlldy5zY2FsZSA9IDFcblx0XHRcdFx0bmV3Vmlldy5icmlnaHRuZXNzID0gMTAwXG5cdFx0XHRcdFxuXHRcdFx0XHQjIG9sZFZpZXdcblx0XHRcdFx0QGN1cnJlbnRWaWV3Py5wb2ludCA9IHt4OiAwLCB5OiAwfSAjIGZpeGVzIG9mZnNldCBpc3N1ZSB3aGVuIG1vdmluZyB0b28gZmFzdCBiZXR3ZWVuIHNjcmVlbnNcblx0XHRcdFx0QGN1cnJlbnRWaWV3Py5wcm9wcyA9IGFuaW1Qcm9wcy5vbGRWaWV3Py5mcm9tXG5cdFx0XHRcdGFuaW1PYmogPSBfLmV4dGVuZCB7cHJvcGVydGllczogYW5pbVByb3BzLm9sZFZpZXc/LnRvfSwgYW5pbWF0aW9uT3B0aW9uc1xuXHRcdFx0XHRfLmRlZmF1bHRzKGFuaW1PYmosIHsgcHJvcGVydGllczoge30gfSlcblx0XHRcdFx0b3V0Z29pbmcgPSBAY3VycmVudFZpZXc/LmFuaW1hdGUgYW5pbU9ialxuXG5cdFx0XHRcdCMgbmV3Vmlld1xuXHRcdFx0XHRuZXdWaWV3LnByb3BzID0gYW5pbVByb3BzLm5ld1ZpZXc/LmZyb21cblx0XHRcdFx0aW5jb21pbmcgPSBuZXdWaWV3LmFuaW1hdGUgXy5leHRlbmQge3Byb3BlcnRpZXM6IGFuaW1Qcm9wcy5uZXdWaWV3Py50b30sIGFuaW1hdGlvbk9wdGlvbnNcblx0XHRcdFx0XG5cdFx0XHRcdCMgbGF5ZXIgb3JkZXJcblx0XHRcdFx0aWYgXy5pbmNsdWRlcyBuYW1lLCAnT3V0J1xuXHRcdFx0XHRcdG5ld1ZpZXcucGxhY2VCZWhpbmQoQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcdG91dGdvaW5nLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bmV3Vmlldy5wbGFjZUJlZm9yZShAY3VycmVudFZpZXcpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5WaWV3V2lsbFN3aXRjaCwgQGN1cnJlbnRWaWV3LCBuZXdWaWV3KVxuXHRcdFx0XHRcblx0XHRcdFx0IyBjaGFuZ2UgQ3VycmVudFZpZXcgYmVmb3JlIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQgc28gb25lIGNvdWxkIGdvIGJhY2sgaW4gaGlzdG9yeVxuXHRcdFx0XHQjIHdpdGhvdXQgaGF2aW5nIHRvIHdhaXQgZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGZpbmlzaFxuXHRcdFx0XHRAc2F2ZUN1cnJlbnRWaWV3VG9IaXN0b3J5IG5hbWUsIG91dGdvaW5nLCBpbmNvbWluZ1xuXHRcdFx0XHRAY3VycmVudFZpZXcgPSBuZXdWaWV3XG5cdFx0XHRcdEBlbWl0KFwiY2hhbmdlOnByZXZpb3VzVmlld1wiLCBAcHJldmlvdXNWaWV3KVxuXHRcdFx0XHRAZW1pdChcImNoYW5nZTpjdXJyZW50Vmlld1wiLCBAY3VycmVudFZpZXcpXG5cdFx0XHRcdFxuXHRcdFx0XHRpZiBpbmNvbWluZy5pc0FuaW1hdGluZ1xuXHRcdFx0XHRcdGhvb2sgPSBpbmNvbWluZyBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGhvb2sgPSBvdXRnb2luZ1xuXHRcdFx0XHRob29rPy5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0XHRcdEBlbWl0KEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBAcHJldmlvdXNWaWV3LCBAY3VycmVudFZpZXcpXG5cdFx0XHRcdFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlld05hbWU/XG5cdFx0XHRhdXRvSW5pdGlhbCA9IF8uZmluZCBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVycywgKGwpIC0+IGwubmFtZSBpcyBvcHRpb25zLmluaXRpYWxWaWV3TmFtZVxuXHRcdFx0aWYgYXV0b0luaXRpYWw/IHRoZW4gQHN3aXRjaEluc3RhbnQgYXV0b0luaXRpYWxcblxuXHRcdGlmIG9wdGlvbnMuaW5pdGlhbFZpZXc/XG5cdFx0XHRAc3dpdGNoSW5zdGFudCBvcHRpb25zLmluaXRpYWxWaWV3XG5cblx0XHRpZiBvcHRpb25zLmJhY2tCdXR0b25OYW1lP1xuXHRcdFx0YmFja0J1dHRvbnMgPSBfLmZpbHRlciBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVycywgKGwpIC0+IF8uaW5jbHVkZXMgbC5uYW1lLCBvcHRpb25zLmJhY2tCdXR0b25OYW1lXG5cdFx0XHRmb3IgYnRuIGluIGJhY2tCdXR0b25zXG5cdFx0XHRcdGJ0bi5vbkNsaWNrID0+IEBiYWNrKClcblxuXHRAZGVmaW5lIFwicHJldmlvdXNWaWV3XCIsXG5cdFx0XHRnZXQ6IC0+IEBoaXN0b3J5WzBdLnZpZXdcblxuXHRzYXZlQ3VycmVudFZpZXdUb0hpc3Rvcnk6IChuYW1lLG91dGdvaW5nQW5pbWF0aW9uLGluY29taW5nQW5pbWF0aW9uKSAtPlxuXHRcdEBoaXN0b3J5LnVuc2hpZnRcblx0XHRcdHZpZXc6IEBjdXJyZW50Vmlld1xuXHRcdFx0YW5pbWF0aW9uTmFtZTogbmFtZVxuXHRcdFx0aW5jb21pbmdBbmltYXRpb246IGluY29taW5nQW5pbWF0aW9uXG5cdFx0XHRvdXRnb2luZ0FuaW1hdGlvbjogb3V0Z29pbmdBbmltYXRpb25cblxuXHRiYWNrOiAtPlxuXHRcdHByZXZpb3VzID0gQGhpc3RvcnlbMF1cblx0XHRpZiBwcmV2aW91cy52aWV3P1xuXG5cdFx0XHRpZiBfLmluY2x1ZGVzIHByZXZpb3VzLmFuaW1hdGlvbk5hbWUsICdPdXQnXG5cdFx0XHRcdHByZXZpb3VzLnZpZXcuYnJpbmdUb0Zyb250KClcblxuXHRcdFx0YmFja0luID0gcHJldmlvdXMub3V0Z29pbmdBbmltYXRpb24ucmV2ZXJzZSgpXG5cdFx0XHRtb3ZlT3V0ID0gcHJldmlvdXMuaW5jb21pbmdBbmltYXRpb24ucmV2ZXJzZSgpXG5cblx0XHRcdGJhY2tJbi5zdGFydCgpXG5cdFx0XHRtb3ZlT3V0LnN0YXJ0KClcblxuXHRcdFx0QGN1cnJlbnRWaWV3ID0gcHJldmlvdXMudmlld1xuXHRcdFx0QGhpc3Rvcnkuc2hpZnQoKVxuXHRcdFx0bW92ZU91dC5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PiBAY3VycmVudFZpZXcuYnJpbmdUb0Zyb250KClcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FEQUEsSUFBQTs7O0FBQU0s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
