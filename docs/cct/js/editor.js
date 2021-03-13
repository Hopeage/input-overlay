class editor {

    constructor(canvas_id, painter)
    {
        this.canvas_id = canvas_id;
        this.painter = painter;
    }

    draw(painter)
    {
        if (atlas === null) // Don't draw if image hasn't loaded yet
            return;
        let ctx = painter.get_context();
        let cs = painter.cs();

        ctx.save();
        ctx.rect(cs.origin.x, cs.origin.y, cs.dimensions.w, cs.dimensions.h);
        ctx.clip();
        painter.image_crop(atlas, cs.origin.x - cs.offset.x, cs.origin.y - cs.offset.y, atlas.width * cs.scale,
                           atlas.height * cs.scale, 0, 0, atlas.width, atlas.height);
        ctx.restore();
    }
}