System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, v3, Vec2, JSB, cocosUtil, MotionStreakUtil, _crd, _tangent, _normal, _vec2, QUAD_INDICES, MotionStreakAssemblerUtil, MotionStreakAssemblerManager;

  function normal(out, dir) {
    // get perpendicular
    out.x = -dir.y;
    out.y = dir.x;
    return out;
  }

  function computeMiter(miter, lineA, lineB, halfThick, maxMultiple) {
    // get tangent line
    lineA.add(lineB, _tangent);

    _tangent.normalize(); // get miter as a unit vector


    miter.x = -_tangent.y;
    miter.y = _tangent.x;
    _vec2.x = -lineA.y;
    _vec2.y = lineA.x; // get the necessary length of our miter

    let multiple = 1 / miter.dot(_vec2);

    if (maxMultiple) {
      multiple = Math.min(multiple, maxMultiple);
    }

    return halfThick * multiple;
  }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMotionStreakUtil(extras) {
    _reporterNs.report("MotionStreakUtil", "./MotionStreakUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
    }, function (_ccEnv) {
      JSB = _ccEnv.JSB;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      MotionStreakUtil = _unresolved_3.MotionStreakUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56d1c1YouZLQJ6kjxlzyHMV", "MotionStreakAssemblerUtil", undefined);

      __checkObsolete__(['Color', 'IAssembler', 'RenderData', 'v3', 'Vec2']);

      _tangent = new Vec2(); // const _miter = new Vec2();

      _normal = new Vec2();
      _vec2 = new Vec2();

      _export("MotionStreakAssemblerUtil", MotionStreakAssemblerUtil = {
        createData(comp) {
          const renderData = comp.requestRenderData();
          renderData.dataLength = 4;
          renderData.resize(16, (16 - 2) * 3);
          return renderData;
        },

        tmpVec3: v3(0, 0, 0),

        update(comp, dt) {
          const stroke = comp.stroke / 2;
          const node = comp.node;
          const tx = node.getPosition().x;
          const ty = node.getPosition().y;
          const points = comp.points;
          let cur;

          if (points.length > 1) {
            const point = points[0];
            const difx = point.point.x - tx;
            const dify = point.point.y - ty;

            if (difx * difx + dify * dify < comp.minSeg) {
              cur = point;
            }
          }

          if (!cur) {
            cur = new (_crd && MotionStreakUtil === void 0 ? (_reportPossibleCrUseOfMotionStreakUtil({
              error: Error()
            }), MotionStreakUtil) : MotionStreakUtil).Point();
            points.unshift(cur);
          }

          cur.setPoint(tx, ty);
          cur.time = comp.fadeTime + dt;
          let vertexCount = 0;
          let indexCount = 0;

          if (points.length < 2) {
            return;
          }

          const renderData = comp.renderData;
          this.updateRenderDataCache(comp, renderData);
          const color = comp.color;
          const cr = color.r;
          const cg = color.g;
          const cb = color.b;
          const ca = color.a;
          const prev = points[1];
          prev.distance = Vec2.subtract(_vec2, cur.point, prev.point).length();

          _vec2.normalize();

          prev.setDir(_vec2.x, _vec2.y);
          cur.setDir(_vec2.x, _vec2.y);
          renderData.dataLength = points.length * 2;
          const data = renderData.data;
          const fadeTime = comp.fadeTime;
          let findLast = false;

          for (let i = points.length - 1; i >= 0; i--) {
            const p = points[i];
            const point = p.point;
            const dir = p.dir;
            p.time -= dt;

            if (p.time < 0) {
              points.splice(i, 1);
              continue;
            }

            const progress = p.time / fadeTime;
            const next = points[i - 1];

            if (!findLast) {
              if (!next) {
                points.splice(i, 1);
                continue;
              }

              point.x = next.point.x - dir.x * progress;
              point.y = next.point.y - dir.y * progress;
            }

            findLast = true;
            normal(_normal, dir);
            const da = progress * ca;
            const c = (da << 24 >>> 0) + (cb << 16) + (cg << 8) + cr;
            let offset = vertexCount;
            let tmpX = point.x + _normal.x * stroke;
            let tmpY = point.y + _normal.y * stroke;
            this.tmpVec3.x = tmpX;
            this.tmpVec3.y = tmpY;
            let pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(node, this.tmpVec3);
            data[offset].x = pos.x;
            data[offset].y = pos.y;
            data[offset].u = 1;
            data[offset].v = progress;
            data[offset].color._val = c;
            offset += 1; // data[offset].x = point.x - _normal.x * stroke;
            // data[offset].y = point.y - _normal.y * stroke;

            tmpX = point.x - _normal.x * stroke;
            tmpY = point.y - _normal.y * stroke;
            this.tmpVec3.x = tmpX;
            this.tmpVec3.y = tmpY;
            pos = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).convertToWorldSpaceWithPos(node, this.tmpVec3);
            data[offset].x = pos.x;
            data[offset].y = pos.y;
            data[offset].u = 0;
            data[offset].v = progress;
            data[offset].color._val = c;
            vertexCount += 2;
          }

          indexCount = vertexCount <= 2 ? 0 : (vertexCount - 2) * 3;
          renderData.resize(vertexCount, indexCount); // resize

          if (JSB) {
            const indexCount = renderData.indexCount;
            this.createQuadIndices(comp, indexCount);
            renderData.chunk.setIndexBuffer(QUAD_INDICES); //  Fill all dataList to vData

            this.updateWorldVertexAllData(comp);
            renderData.updateRenderData(comp, comp.texture); // No need update WorldMatrix, so change dirty flag
            // A dirty hack

            renderData.renderDrawInfo.setVertDirty(false);
            comp.node.hasChangedFlags = 0;
          }
        },

        updateWorldVertexAllData(comp) {
          const renderData = comp.renderData;
          const stride = renderData.floatStride;
          const dataList = renderData.data;
          const vData = renderData.chunk.vb;

          for (let i = 0; i < dataList.length; i++) {
            const offset = i * stride;
            vData[offset + 0] = dataList[i].x;
            vData[offset + 1] = dataList[i].y;
            vData[offset + 2] = dataList[i].z;
            vData[offset + 3] = dataList[i].u;
            vData[offset + 4] = dataList[i].v;
            Color.toArray(vData, dataList[i].color, offset + 5);
          }
        },

        createQuadIndices(comp, indexCount) {
          const renderData = comp.renderData;
          const chunk = renderData.chunk;
          const vid = 0;
          const meshBuffer = chunk.meshBuffer;
          let indexOffset = meshBuffer.indexOffset;
          QUAD_INDICES = null;
          QUAD_INDICES = new Uint16Array(indexCount);

          for (let i = 0, l = indexCount; i < l; i += 2) {
            const start = vid + i;
            QUAD_INDICES[indexOffset++] = start;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 3;
          }
        },

        updateRenderDataCache(comp, renderData) {
          if (renderData.passDirty) {
            renderData.updatePass(comp);
          }

          if (renderData.nodeDirty) {
            renderData.updateNode(comp);
          }

          if (renderData.textureDirty && comp.texture) {
            renderData.updateTexture(comp.texture);
            renderData.material = comp.getRenderMaterial(0);
          }

          if (renderData.hashDirty) {
            renderData.updateHash();
          }
        },

        updateRenderData(comp) {},

        updateColor(comp) {},

        fillBuffers(comp, renderer) {
          const renderData = comp.renderData;
          const chunk = renderData.chunk;
          const dataList = renderData.data;
          const vertexCount = renderData.vertexCount;
          const indexCount = renderData.indexCount;
          const vData = chunk.vb;
          let vertexOffset = 0;

          for (let i = 0; i < vertexCount; i++) {
            const vert = dataList[i];
            vData[vertexOffset++] = vert.x;
            vData[vertexOffset++] = vert.y;
            vData[vertexOffset++] = vert.z;
            vData[vertexOffset++] = vert.u;
            vData[vertexOffset++] = vert.v;
            Color.toArray(vData, vert.color, vertexOffset);
            vertexOffset += 4;
          } // fill index data


          const bid = chunk.bufferId;
          const vid = chunk.vertexOffset;
          const meshBuffer = chunk.meshBuffer;
          const ib = chunk.meshBuffer.iData;
          let indexOffset = meshBuffer.indexOffset;

          for (let i = 0, l = indexCount; i < l; i += 2) {
            const start = vid + i;
            ib[indexOffset++] = start;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 3;
          }

          meshBuffer.indexOffset += renderData.indexCount;
          meshBuffer.setDirty();
        }

      });

      _export("MotionStreakAssemblerManager", MotionStreakAssemblerManager = {
        getAssembler(comp) {
          return MotionStreakAssemblerUtil;
        }

      });

      (_crd && MotionStreakUtil === void 0 ? (_reportPossibleCrUseOfMotionStreakUtil({
        error: Error()
      }), MotionStreakUtil) : MotionStreakUtil).Assembler = MotionStreakAssemblerManager;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c40090b2559929f9d11ee648062b77f588e17b1.js.map