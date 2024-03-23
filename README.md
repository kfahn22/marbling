# Mathematical Marbling

Paper marbling is a captivating traditional art form that involves floating paints on a thickened liquid surface, manipulating them into intricate patterns, and then transferring those patterns onto paper or fabric. It originated in Japan in the twelfth century and later spread to Turkey and other parts of the world.

The process typically begins with a tray filled with a viscous solution made from gum tragacanth or carrageenan, which helps the paints float on the surface. Then, various colored oil or acrylic paints are carefully dropped onto the surface of the liquid. The artist can use different tools like brushes, combs, or styluses to create intricate designs by swirling, combing, or blowing on the paints.

Once the desired pattern is achieved, a piece of paper or fabric is carefully laid onto the surface of the liquid, capturing the design. The paper is then gently lifted, revealing a unique and mesmerizing marbled pattern. The excess liquid is often rinsed off, and the paper is left to dry.

The art of paper marbling requires both skill and creativity, as artists must master the delicate balance of paint consistency, surface tension, and timing to create stunning and harmonious designs. Each piece is truly one-of-a-kind, making paper marbling a cherished form of artistic expression and decoration.

Mathematical marbling, also known as computational or digital marbling, is a cool way of making patterns that look like those made with traditional paper marbling, but it's done using math and computers instead of paints and trays.

Here's how it works in simple terms: Imagine you have a grid, like graph paper. Each square on the grid can be colored in different ways, just like how you'd put different colored paints on the surface in traditional marbling. Instead of dropping paint, though, we use mathematical equations to figure out how to color each square based on its position and its relationship with neighboring squares.

We can use things like random numbers and mathematical formulas to create patterns that look natural and beautiful, just like the swirls and shapes you see in traditional marbling. But instead of using brushes and tools, we're using lines of code to tell the computer how to make these patterns.

Base [code](https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr) from [Daniel Shiffman](https://thecodingtrain.com) - Mathematical Marbling Coding Challenge coming soon.

### Coding the tine strokes

From [The Mathematics of Marbling](http://people.csail.mit.edu/jaffer/Marbling/Mathematics):

$F_v(x, y) = (x, y + z \cdot u |x - x_L|)$

$u = \frac{1}{2}^\frac{1}{c}$

The parameters z, u(c) control maximum displacement and sharpness of bends. A larger z yields a larger displacement, while a smaller c results in sharper bends.

## References

- [A Computational Method for Interactive Design of Marbling Patterns](https://www.researchgate.net/publication/330940964_A_Computational_Method_for_Interactive_Design_of_Marbling_Patterns/link/5e42f45492851c7f7f2f9031/download?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InB1YmxpY2F0aW9uIn19)
- [Digital Marbling](http://digital-marbling.de)
- [Digital Marbling by Amanda Ghassaei](https://blog.amandaghassaei.com/2022/10/25/digital-marbling/)
- [Digital Marbling a GPU Approach With Precomputed Velocity Field](https://cs.uwaterloo.ca/sites/ca.computer-science/files/uploads/files/cs-2014-08.pdf)
- [Fluid Simulation (with WebGL demo)](https://jamie-wong.com/2016/08/05/webgl-fluid-simulation/)
- [Marblizer](https://github.com/nickswalker/marblizer)
- [Marblizer App](https://marblizer.nickwalker.us)
- [Mathematical Marbling](http://www.cad.zju.edu.cn/home/jin/cga2012/mmarbling.pdf)
- [Marbled Paper Patterns](https://content.lib.washington.edu/dpweb/patterns.html)
- [Mabling experiment](https://github.com/amandaghassaei/marbling-experiment/blob/main/src/simulation.ts)
- [Mathematical Marbling How-To](https://people.csail.mit.edu/jaffer/Marbling/How-To)
- [Stable Fluids](https://www.dgp.toronto.edu/public_user/stam/reality/Research/pdf/ns.pdf)
- [The Mathematics of Marbling](http://people.csail.mit.edu/jaffer/Marbling/Mathematics)
