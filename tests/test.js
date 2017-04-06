describe('Text Editor', function() {
	describe('#autoSave()', function() {
		it('should set an interval on key press', function() {
			// TODO
		})
	})
});

describe('Canvas Client', function() {
	describe('#getMousePosition', function() {
		it('should return the old and new position of the mouse ', function() {
			expect(getMousePosition()).to.have.property('x');
			expect(getMousePosition()).to.have.property('y');
			expect(getMousePosition()).to.have.property('OldX');
			expect(getMousePosition()).to.have.property('OldY');
		})
	})
});