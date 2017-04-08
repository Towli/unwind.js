describe('Text Editor', function() {
	describe('#autoSave()', function() {
		it('should set an interval on key press', function() {
			// TODO
		})
	})
});

describe('Canvas Client', function() {
	describe('#getMousePos', function() {
		it('should return the old and new position of the mouse ', function() {
			var canvas = document.createElement('canvas');
			var stub = sinon.stub();
			var spy = sinon.spy();
			expect(getMousePos(canvas, stub)).to.have.property('x');
			expect(getMousePos(canvas, stub)).to.have.property('y');
			expect(getMousePos(canvas, stub)).to.have.property('oldX');
			expect(getMousePos(canvas, stub)).to.have.property('oldY');
		})
	})
});